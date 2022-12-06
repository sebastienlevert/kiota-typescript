import {CallRecordingStatus} from './callRecordingStatus';
import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {CallRecordingEventMessageDetail} from './index';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCallRecordingEventMessageDetail(callRecordingEventMessageDetail: CallRecordingEventMessageDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(callRecordingEventMessageDetail),
        "callId": n => { callRecordingEventMessageDetail.callId = n.getStringValue() as any ; },
        "callRecordingDisplayName": n => { callRecordingEventMessageDetail.callRecordingDisplayName = n.getStringValue() as any ; },
        "callRecordingDuration": n => { callRecordingEventMessageDetail.callRecordingDuration = n.getDurationValue() as any ; },
        "callRecordingStatus": n => { callRecordingEventMessageDetail.callRecordingStatus = n.getEnumValue<CallRecordingStatus>(CallRecordingStatus) as any ; },
        "callRecordingUrl": n => { callRecordingEventMessageDetail.callRecordingUrl = n.getStringValue() as any ; },
        "initiator": n => { callRecordingEventMessageDetail.initiator = n.getObject(deserializeIntoIdentitySet) as any ; },
        "meetingOrganizer": n => { callRecordingEventMessageDetail.meetingOrganizer = n.getObject(deserializeIntoIdentitySet) as any ; },
    }
}
