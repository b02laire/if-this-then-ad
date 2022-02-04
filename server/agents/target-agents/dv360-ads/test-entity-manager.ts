import { config } from 'winston';
import EntityManager from './entity-manager';
import { InstanceOptions, EntityType } from './interfaces';

const options: InstanceOptions  = {
    entityType: 'LI',
    advertiserId: 4304640,
    entityId: 50389587,
    action: 'activate',
};
const token = '';

EntityManager
    .getInstance(options, token)
    .activate()
    .then(x => console.log(x));