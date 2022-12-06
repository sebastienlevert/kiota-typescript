import {EventMessageRequest} from './index';
import {MeetingRequestType} from './meetingRequestType';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {serializeEventMessage} from './serializeEventMessage';
import {serializeLocation} from './serializeLocation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEventMessageRequest(writer: SerializationWriter, eventMessageRequest: EventMessageRequest | undefined = {}) : void {
        serializeEventMessage(writer, eventMessageRequest)
            writer.writeBooleanValue("allowNewTimeProposals", eventMessageRequest.allowNewTimeProposals);
            writer.writeEnumValue<MeetingRequestType>("meetingRequestType", eventMessageRequest.meetingRequestType);
            writer.writeObjectValueFromMethod("previousEndDateTime", eventMessageRequest.previousEndDateTime as any, serializeDateTimeTimeZone);
            writer.writeObjectValueFromMethod("previousLocation", eventMessageRequest.previousLocation as any, serializeLocation);
            writer.writeObjectValueFromMethod("previousStartDateTime", eventMessageRequest.previousStartDateTime as any, serializeDateTimeTimeZone);
            writer.writeBooleanValue("responseRequested", eventMessageRequest.responseRequested);
}
