
import dv360 from './index'
import {AgentTask} from './interfaces';

const task: AgentTask = {
    tokens: {
        auth: '',
    },
    ruleResult: {
        ruleId: '123',
        result: true, 
        actions: [ { 
            action: 'Some Action',
            params: [
                {
                    key: 'action',
                    value: 'deactivate',
                },
                {
                    key: 'entityId',
                    value: 50389587,
                },
                {
                    key: 'advertiserId',
                    value: 4304640,
                },
                {
                    key: 'entityType',
                    value: 'LI',
                },
            ],
        }, { 
            action: '#2 Error Action',
            params: [
                {
                    key: 'action',
                    value: 'activate',
                },
                {
                    key: 'entityId',
                    value: 1231250389587,// non-existing id
                },
                {
                    key: 'advertiserId',
                    value: 4304640,
                },
                {
                    key: 'entityType',
                    value: 'LI',
                },
            ],
        }, { 
            action: '#3 Action',
            params: [
                {
                    key: 'action',
                    value: 'deactivate',
                },
                {
                    key: 'entityId',
                    value: 19345182,
                },
                {
                    key: 'advertiserId',
                    value: 4304640,
                },
                {
                    key: 'entityType',
                    value: 'IO',
                },
            ],
        }]
    },
};

dv360.execute(task)
    .then(x => console.log(x));