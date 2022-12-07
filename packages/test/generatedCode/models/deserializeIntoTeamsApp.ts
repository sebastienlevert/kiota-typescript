import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoTeamsAppDefinition} from './deserializeIntoTeamsAppDefinition';
import {TeamsApp} from './index';
import {TeamsAppDistributionMethod} from './teamsAppDistributionMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsApp(teamsApp: TeamsApp | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(teamsApp),
        "appDefinitions": n => { teamsApp.appDefinitions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTeamsAppDefinition) as any ; },
        "displayName": n => { teamsApp.displayName = n.getStringValue() as any ; },
        "distributionMethod": n => { teamsApp.distributionMethod = n.getEnumValue<TeamsAppDistributionMethod>(TeamsAppDistributionMethod) as any ; },
        "externalId": n => { teamsApp.externalId = n.getStringValue() as any ; },
    }
}
