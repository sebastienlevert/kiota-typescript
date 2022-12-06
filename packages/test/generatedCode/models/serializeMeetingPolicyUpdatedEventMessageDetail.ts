import {MeetingPolicyUpdatedEventMessageDetail} from './index';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMeetingPolicyUpdatedEventMessageDetail(writer: SerializationWriter, meetingPolicyUpdatedEventMessageDetail: MeetingPolicyUpdatedEventMessageDetail | undefined = {}) : void {
        serializeEventMessageDetail(writer, meetingPolicyUpdatedEventMessageDetail)
            writer.writeObjectValueFromMethod("initiator", meetingPolicyUpdatedEventMessageDetail.initiator as any, serializeIdentitySet);
            writer.writeBooleanValue("meetingChatEnabled", meetingPolicyUpdatedEventMessageDetail.meetingChatEnabled);
            writer.writeStringValue("meetingChatId", meetingPolicyUpdatedEventMessageDetail.meetingChatId);
}
