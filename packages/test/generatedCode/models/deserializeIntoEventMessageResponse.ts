import {deserializeIntoEventMessage} from './deserializeIntoEventMessage';
import {deserializeIntoTimeSlot} from './deserializeIntoTimeSlot';
import {EventMessageResponse} from './index';
import {ResponseType} from './responseType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEventMessageResponse(eventMessageResponse: EventMessageResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessage(eventMessageResponse),
        "proposedNewTime": n => { eventMessageResponse.proposedNewTime = n.getObject(deserializeIntoTimeSlot) as any ; },
        "responseType": n => { eventMessageResponse.responseType = n.getEnumValue<ResponseType>(ResponseType) as any ; },
    }
}
