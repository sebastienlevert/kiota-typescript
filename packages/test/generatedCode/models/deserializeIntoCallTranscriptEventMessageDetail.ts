import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {CallTranscriptEventMessageDetail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCallTranscriptEventMessageDetail(callTranscriptEventMessageDetail: CallTranscriptEventMessageDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(callTranscriptEventMessageDetail),
        "callId": n => { callTranscriptEventMessageDetail.callId = n.getStringValue() as any ; },
        "callTranscriptICalUid": n => { callTranscriptEventMessageDetail.callTranscriptICalUid = n.getStringValue() as any ; },
        "meetingOrganizer": n => { callTranscriptEventMessageDetail.meetingOrganizer = n.getObject(deserializeIntoIdentitySet) as any ; },
    }
}
