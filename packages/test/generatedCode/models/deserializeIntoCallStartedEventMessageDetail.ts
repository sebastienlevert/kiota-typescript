import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {CallStartedEventMessageDetail} from './index';
import {TeamworkCallEventType} from './teamworkCallEventType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCallStartedEventMessageDetail(callStartedEventMessageDetail: CallStartedEventMessageDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(callStartedEventMessageDetail),
        "callEventType": n => { callStartedEventMessageDetail.callEventType = n.getEnumValue<TeamworkCallEventType>(TeamworkCallEventType) as any ; },
        "callId": n => { callStartedEventMessageDetail.callId = n.getStringValue() as any ; },
        "initiator": n => { callStartedEventMessageDetail.initiator = n.getObject(deserializeIntoIdentitySet) as any ; },
    }
}
