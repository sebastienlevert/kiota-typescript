import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {deserializeIntoTeamworkBot} from './deserializeIntoTeamworkBot';
import {TeamsAppDefinition} from './index';
import {TeamsAppPublishingState} from './teamsAppPublishingState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsAppDefinition(teamsAppDefinition: TeamsAppDefinition | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(teamsAppDefinition),
        "bot": n => { teamsAppDefinition.bot = n.getObject(deserializeIntoTeamworkBot) as any ; },
        "createdBy": n => { teamsAppDefinition.createdBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "description": n => { teamsAppDefinition.description = n.getStringValue() as any ; },
        "displayName": n => { teamsAppDefinition.displayName = n.getStringValue() as any ; },
        "lastModifiedDateTime": n => { teamsAppDefinition.lastModifiedDateTime = n.getDateValue() as any ; },
        "publishingState": n => { teamsAppDefinition.publishingState = n.getEnumValue<TeamsAppPublishingState>(TeamsAppPublishingState) as any ; },
        "shortDescription": n => { teamsAppDefinition.shortDescription = n.getStringValue() as any ; },
        "teamsAppId": n => { teamsAppDefinition.teamsAppId = n.getStringValue() as any ; },
        "version": n => { teamsAppDefinition.version = n.getStringValue() as any ; },
    }
}
