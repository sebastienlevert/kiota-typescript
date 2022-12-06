import {TeamCreatedEventMessageDetail} from './index';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamCreatedEventMessageDetail(writer: SerializationWriter, teamCreatedEventMessageDetail: TeamCreatedEventMessageDetail | undefined = {}) : void {
        serializeEventMessageDetail(writer, teamCreatedEventMessageDetail)
            writer.writeObjectValueFromMethod("initiator", teamCreatedEventMessageDetail.initiator as any, serializeIdentitySet);
            writer.writeStringValue("teamDescription", teamCreatedEventMessageDetail.teamDescription);
            writer.writeStringValue("teamDisplayName", teamCreatedEventMessageDetail.teamDisplayName);
            writer.writeStringValue("teamId", teamCreatedEventMessageDetail.teamId);
}
