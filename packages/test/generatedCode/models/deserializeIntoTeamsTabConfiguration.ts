import {TeamsTabConfiguration} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsTabConfiguration(teamsTabConfiguration: TeamsTabConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "contentUrl": n => { teamsTabConfiguration.contentUrl = n.getStringValue() as any ; },
        "entityId": n => { teamsTabConfiguration.entityId = n.getStringValue() as any ; },
        "removeUrl": n => { teamsTabConfiguration.removeUrl = n.getStringValue() as any ; },
        "websiteUrl": n => { teamsTabConfiguration.websiteUrl = n.getStringValue() as any ; },
    }
}
