import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {deserializeIntoTeamsAppIcon} from './deserializeIntoTeamsAppIcon';
import {deserializeIntoTeamworkBot} from './deserializeIntoTeamworkBot';
import {TeamsAppDefinition} from './index';
import {TeamsAppInstallationScopes} from './teamsAppInstallationScopes';
import {TeamsAppPublishingState} from './teamsAppPublishingState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsAppDefinition(teamsAppDefinition: TeamsAppDefinition | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(teamsAppDefinition),
        "allowedInstallationScopes": n => { teamsAppDefinition.allowedInstallationScopes = n.getEnumValue<TeamsAppInstallationScopes>(TeamsAppInstallationScopes) as any ; },
        "azureADAppId": n => { teamsAppDefinition.azureADAppId = n.getStringValue() as any ; },
        "bot": n => { teamsAppDefinition.bot = n.getObject(deserializeIntoTeamworkBot) as any ; },
        "colorIcon": n => { teamsAppDefinition.colorIcon = n.getObject(deserializeIntoTeamsAppIcon) as any ; },
        "createdBy": n => { teamsAppDefinition.createdBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "description": n => { teamsAppDefinition.description = n.getStringValue() as any ; },
        "displayName": n => { teamsAppDefinition.displayName = n.getStringValue() as any ; },
        "lastModifiedDateTime": n => { teamsAppDefinition.lastModifiedDateTime = n.getDateValue() as any ; },
        "outlineIcon": n => { teamsAppDefinition.outlineIcon = n.getObject(deserializeIntoTeamsAppIcon) as any ; },
        "publishingState": n => { teamsAppDefinition.publishingState = n.getEnumValue<TeamsAppPublishingState>(TeamsAppPublishingState) as any ; },
        "shortdescription": n => { teamsAppDefinition.shortdescription = n.getStringValue() as any ; },
        "teamsAppId": n => { teamsAppDefinition.teamsAppId = n.getStringValue() as any ; },
        "version": n => { teamsAppDefinition.version = n.getStringValue() as any ; },
    }
}
