import {TeamsTabConfiguration} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsTabConfiguration(writer: SerializationWriter, teamsTabConfiguration: TeamsTabConfiguration | undefined = {}) : void {
            writer.writeStringValue("contentUrl", teamsTabConfiguration.contentUrl);
            writer.writeStringValue("entityId", teamsTabConfiguration.entityId);
            writer.writeStringValue("removeUrl", teamsTabConfiguration.removeUrl);
            writer.writeStringValue("websiteUrl", teamsTabConfiguration.websiteUrl);
}
