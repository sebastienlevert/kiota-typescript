import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {MeetingPolicyUpdatedEventMessageDetail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMeetingPolicyUpdatedEventMessageDetail(meetingPolicyUpdatedEventMessageDetail: MeetingPolicyUpdatedEventMessageDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(meetingPolicyUpdatedEventMessageDetail),
        "initiator": n => { meetingPolicyUpdatedEventMessageDetail.initiator = n.getObject(deserializeIntoIdentitySet) as any ; },
        "meetingChatEnabled": n => { meetingPolicyUpdatedEventMessageDetail.meetingChatEnabled = n.getBooleanValue() as any ; },
        "meetingChatId": n => { meetingPolicyUpdatedEventMessageDetail.meetingChatId = n.getStringValue() as any ; },
    }
}
