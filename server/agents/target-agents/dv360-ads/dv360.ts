import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import {
    AgentTask, EntityType, TargetAction, actionParam, EntityStatus, ActionResult, IAgent
} from './interfaces';
import { config } from './config'



export default class DV360 implements IAgent {

    agentId:string = config.id; 
    name = config.name;
     
    private getEntityType(t: string) {
        return 'IO' == t ? EntityType.IO : EntityType.LI;
    }

    private getEntityStatusString(s: string) {
        return 'activate' == s ? EntityStatus.ACTIVATE : EntityStatus.DEACTIVATE;
    }

    private transform(
        task: AgentTask,
        action: TargetAction,
        data: any,
        error: any = null
    ): ActionResult {
        return {
            ruleId: task.ruleResult.ruleId,
            action: action.action,
            displayName: data?.displayName,
            entityStatus: data?.entityStatus,
            timestamp: new Date(),
            success: error ? false : true,
            error: error?.message,
        };
    }

    private convertToObject(a: Array<actionParam>) {
        const o = {};
        a.forEach(p => { o[p.key] = p.value });
        return o;
    }

    private async executeAction(action: TargetAction, token: any) {

        const actionParams = this.convertToObject(action.params);

        const url = config.baseUrl + this.getEntityEndpointUrl(actionParams);

        const data = {
            entityStatus: this.getEntityStatusString(actionParams['action'])
        };

        const requestConfig: AxiosRequestConfig = this.getRequestConfig(url, token);

        const res = await axios.patch(url, data, requestConfig);
        return res.data;
    }

    private getEntityEndpointUrl(actionParams: any) {
        return '/advertisers'
            + `/${actionParams['advertiserId']}`
            + `/${this.getEntityType(actionParams['entityType'])}`
            + `/${actionParams['entityId']}`
            + '?updateMask=entityStatus';
    }

    private getRequestConfig(url: string, token: string): AxiosRequestConfig<any> {
        return {
            url: url,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            responseType: 'json',
            responseEncoding: 'utf-8'
        };
    }

    public async execute(task: AgentTask) {
        const token = task.tokens.auth;
        const result: Array<any> = []; // We need a type.
        for (const action of task.ruleResult.actions) {
            try {
                const data = await this.executeAction(action, token);
                result.push(this.transform(task, action, data));
            } catch (err) {

                result.push(this.transform(task, action, {}, err));
            }
        }

        return result;
    }

    // TODO
    public async getMetadata() { }

    // TODO: Method to query DV360 entities for the UI
}