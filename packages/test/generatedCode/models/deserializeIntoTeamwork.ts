import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoWorkforceIntegration} from './deserializeIntoWorkforceIntegration';
import {Teamwork} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamwork(teamwork: Teamwork | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(teamwork),
        "workforceIntegrations": n => { teamwork.workforceIntegrations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkforceIntegration) as any ; },
    }
}
