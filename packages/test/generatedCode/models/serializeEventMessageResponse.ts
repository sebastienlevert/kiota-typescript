import {EventMessageResponse} from './index';
import {ResponseType} from './responseType';
import {serializeEventMessage} from './serializeEventMessage';
import {serializeTimeSlot} from './serializeTimeSlot';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEventMessageResponse(writer: SerializationWriter, eventMessageResponse: EventMessageResponse | undefined = {}) : void {
        serializeEventMessage(writer, eventMessageResponse)
            writer.writeObjectValueFromMethod("proposedNewTime", eventMessageResponse.proposedNewTime as any, serializeTimeSlot);
            writer.writeEnumValue<ResponseType>("responseType", eventMessageResponse.responseType);
}
