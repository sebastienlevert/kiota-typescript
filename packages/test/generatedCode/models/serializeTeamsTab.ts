import {TeamsTab} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeTeamsApp} from './serializeTeamsApp';
import {serializeTeamsTabConfiguration} from './serializeTeamsTabConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsTab(writer: SerializationWriter, teamsTab: TeamsTab | undefined = {}) : void {
        serializeEntity(writer, teamsTab)
            writer.writeObjectValueFromMethod("configuration", teamsTab.configuration as any, serializeTeamsTabConfiguration);
            writer.writeStringValue("displayName", teamsTab.displayName);
            writer.writeObjectValueFromMethod("teamsApp", teamsTab.teamsApp as any, serializeTeamsApp);
            writer.writeStringValue("webUrl", teamsTab.webUrl);
}
