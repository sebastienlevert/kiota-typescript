import {TeamsAppDefinition} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeTeamworkBot} from './serializeTeamworkBot';
import {TeamsAppPublishingState} from './teamsAppPublishingState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsAppDefinition(writer: SerializationWriter, teamsAppDefinition: TeamsAppDefinition | undefined = {}) : void {
        serializeEntity(writer, teamsAppDefinition)
            writer.writeObjectValueFromMethod("bot", teamsAppDefinition.bot as any, serializeTeamworkBot);
            writer.writeObjectValueFromMethod("createdBy", teamsAppDefinition.createdBy as any, serializeIdentitySet);
            writer.writeStringValue("description", teamsAppDefinition.description);
            writer.writeStringValue("displayName", teamsAppDefinition.displayName);
            writer.writeDateValue("lastModifiedDateTime", teamsAppDefinition.lastModifiedDateTime);
            writer.writeEnumValue<TeamsAppPublishingState>("publishingState", teamsAppDefinition.publishingState);
            writer.writeStringValue("shortDescription", teamsAppDefinition.shortDescription);
            writer.writeStringValue("teamsAppId", teamsAppDefinition.teamsAppId);
            writer.writeStringValue("version", teamsAppDefinition.version);
}
