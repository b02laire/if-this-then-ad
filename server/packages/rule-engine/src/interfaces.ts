export interface AgentResult {
    agentId: string,
    jobId: string,
    agentName: string,
    targetLocation: string,
    temperature: number,
    windSpeed: number,
    clouds: boolean,
    rain: boolean,
    snow: boolean,
    thunderstorm: boolean,
    clearSky: boolean,
    timestamp: Date
}

export enum CONDITIONS {
    equals ='eq', 
    greater = 'gt', 
    less = 'lt'
}

export interface Rule {
    ruleId: string, 
    jobId: string,
    agentId: string, 
    agentName: string,
    ruleName: string,
    ruleDatapoint: string,
    ruleCondition: CONDITIONS.equals | CONDITIONS.greater | CONDITIONS.less, 
    ruleTargetValue: string|number|boolean, 
}