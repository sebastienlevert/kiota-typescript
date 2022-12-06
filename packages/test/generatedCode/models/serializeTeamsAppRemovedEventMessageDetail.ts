import {TeamsAppRemovedEventMessageDetail} from './index';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsAppRemovedEventMessageDetail(writer: SerializationWriter, teamsAppRemovedEventMessageDetail: TeamsAppRemovedEventMessageDetail | undefined = {}) : void {
        serializeEventMessageDetail(writer, teamsAppRemovedEventMessageDetail)
            writer.writeObjectValueFromMethod("initiator", teamsAppRemovedEventMessageDetail.initiator as any, serializeIdentitySet);
            writer.writeStringValue("teamsAppDisplayName", teamsAppRemovedEventMessageDetail.teamsAppDisplayName);
            writer.writeStringValue("teamsAppId", teamsAppRemovedEventMessageDetail.teamsAppId);
}
