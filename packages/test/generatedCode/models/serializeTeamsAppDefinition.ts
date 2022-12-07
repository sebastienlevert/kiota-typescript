import {TeamsAppDefinition} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeTeamsAppIcon} from './serializeTeamsAppIcon';
import {serializeTeamworkBot} from './serializeTeamworkBot';
import {TeamsAppInstallationScopes} from './teamsAppInstallationScopes';
import {TeamsAppPublishingState} from './teamsAppPublishingState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsAppDefinition(writer: SerializationWriter, teamsAppDefinition: TeamsAppDefinition | undefined = {}) : void {
        serializeEntity(writer, teamsAppDefinition)
            writer.writeEnumValue<TeamsAppInstallationScopes>("allowedInstallationScopes", teamsAppDefinition.allowedInstallationScopes);
            writer.writeStringValue("azureADAppId", teamsAppDefinition.azureADAppId);
            writer.writeObjectValueFromMethod("bot", teamsAppDefinition.bot as any, serializeTeamworkBot);
            writer.writeObjectValueFromMethod("colorIcon", teamsAppDefinition.colorIcon as any, serializeTeamsAppIcon);
            writer.writeObjectValueFromMethod("createdBy", teamsAppDefinition.createdBy as any, serializeIdentitySet);
            writer.writeStringValue("description", teamsAppDefinition.description);
            writer.writeStringValue("displayName", teamsAppDefinition.displayName);
            writer.writeDateValue("lastModifiedDateTime", teamsAppDefinition.lastModifiedDateTime);
            writer.writeObjectValueFromMethod("outlineIcon", teamsAppDefinition.outlineIcon as any, serializeTeamsAppIcon);
            writer.writeEnumValue<TeamsAppPublishingState>("publishingState", teamsAppDefinition.publishingState);
            writer.writeStringValue("shortdescription", teamsAppDefinition.shortdescription);
            writer.writeStringValue("teamsAppId", teamsAppDefinition.teamsAppId);
            writer.writeStringValue("version", teamsAppDefinition.version);
}
