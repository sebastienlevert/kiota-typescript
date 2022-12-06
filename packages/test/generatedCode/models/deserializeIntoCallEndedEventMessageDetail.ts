import {deserializeIntoCallParticipantInfo} from './deserializeIntoCallParticipantInfo';
import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {CallEndedEventMessageDetail} from './index';
import {TeamworkCallEventType} from './teamworkCallEventType';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCallEndedEventMessageDetail(callEndedEventMessageDetail: CallEndedEventMessageDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(callEndedEventMessageDetail),
        "callDuration": n => { callEndedEventMessageDetail.callDuration = n.getDurationValue() as any ; },
        "callEventType": n => { callEndedEventMessageDetail.callEventType = n.getEnumValue<TeamworkCallEventType>(TeamworkCallEventType) as any ; },
        "callId": n => { callEndedEventMessageDetail.callId = n.getStringValue() as any ; },
        "callParticipants": n => { callEndedEventMessageDetail.callParticipants = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCallParticipantInfo) as any ; },
        "initiator": n => { callEndedEventMessageDetail.initiator = n.getObject(deserializeIntoIdentitySet) as any ; },
    }
}
