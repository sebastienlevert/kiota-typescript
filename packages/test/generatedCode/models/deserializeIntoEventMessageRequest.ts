import {deserializeIntoDateTimeTimeZone} from './deserializeIntoDateTimeTimeZone';
import {deserializeIntoEventMessage} from './deserializeIntoEventMessage';
import {deserializeIntoLocation} from './deserializeIntoLocation';
import {EventMessageRequest} from './index';
import {MeetingRequestType} from './meetingRequestType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEventMessageRequest(eventMessageRequest: EventMessageRequest | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessage(eventMessageRequest),
        "allowNewTimeProposals": n => { eventMessageRequest.allowNewTimeProposals = n.getBooleanValue() as any ; },
        "meetingRequestType": n => { eventMessageRequest.meetingRequestType = n.getEnumValue<MeetingRequestType>(MeetingRequestType) as any ; },
        "previousEndDateTime": n => { eventMessageRequest.previousEndDateTime = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
        "previousLocation": n => { eventMessageRequest.previousLocation = n.getObject(deserializeIntoLocation) as any ; },
        "previousStartDateTime": n => { eventMessageRequest.previousStartDateTime = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
        "responseRequested": n => { eventMessageRequest.responseRequested = n.getBooleanValue() as any ; },
    }
}
