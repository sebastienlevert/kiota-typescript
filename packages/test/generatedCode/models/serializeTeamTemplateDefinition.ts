import {TeamTemplateDefinition} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeTeam} from './serializeTeam';
import {TeamTemplateAudience} from './teamTemplateAudience';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamTemplateDefinition(writer: SerializationWriter, teamTemplateDefinition: TeamTemplateDefinition | undefined = {}) : void {
        serializeEntity(writer, teamTemplateDefinition)
            writer.writeEnumValue<TeamTemplateAudience>("audience", teamTemplateDefinition.audience);
            writer.writeCollectionOfPrimitiveValues<string>("categories", teamTemplateDefinition.categories);
            writer.writeStringValue("description", teamTemplateDefinition.description);
            writer.writeStringValue("displayName", teamTemplateDefinition.displayName);
            writer.writeStringValue("iconUrl", teamTemplateDefinition.iconUrl);
            writer.writeStringValue("languageTag", teamTemplateDefinition.languageTag);
            writer.writeObjectValueFromMethod("lastModifiedBy", teamTemplateDefinition.lastModifiedBy as any, serializeIdentitySet);
            writer.writeDateValue("lastModifiedDateTime", teamTemplateDefinition.lastModifiedDateTime);
            writer.writeStringValue("parentTemplateId", teamTemplateDefinition.parentTemplateId);
            writer.writeStringValue("publisherName", teamTemplateDefinition.publisherName);
            writer.writeStringValue("shortDescription", teamTemplateDefinition.shortDescription);
            writer.writeObjectValueFromMethod("teamDefinition", teamTemplateDefinition.teamDefinition as any, serializeTeam);
}
