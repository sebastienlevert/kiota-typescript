import {TeamsAppInstalledEventMessageDetail} from './index';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsAppInstalledEventMessageDetail(writer: SerializationWriter, teamsAppInstalledEventMessageDetail: TeamsAppInstalledEventMessageDetail | undefined = {}) : void {
        serializeEventMessageDetail(writer, teamsAppInstalledEventMessageDetail)
            writer.writeObjectValueFromMethod("initiator", teamsAppInstalledEventMessageDetail.initiator as any, serializeIdentitySet);
            writer.writeStringValue("teamsAppDisplayName", teamsAppInstalledEventMessageDetail.teamsAppDisplayName);
            writer.writeStringValue("teamsAppId", teamsAppInstalledEventMessageDetail.teamsAppId);
}
