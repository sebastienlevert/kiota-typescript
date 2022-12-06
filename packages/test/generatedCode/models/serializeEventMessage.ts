import {EventType} from './eventType';
import {EventMessage} from './index';
import {MeetingMessageType} from './meetingMessageType';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {serializeEvent} from './serializeEvent';
import {serializeLocation} from './serializeLocation';
import {serializeMessage} from './serializeMessage';
import {serializePatternedRecurrence} from './serializePatternedRecurrence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEventMessage(writer: SerializationWriter, eventMessage: EventMessage | undefined = {}) : void {
        serializeMessage(writer, eventMessage)
            writer.writeObjectValueFromMethod("endDateTime", eventMessage.endDateTime as any, serializeDateTimeTimeZone);
            writer.writeObjectValueFromMethod("event", eventMessage.event as any, serializeEvent);
            writer.writeBooleanValue("isAllDay", eventMessage.isAllDay);
            writer.writeBooleanValue("isDelegated", eventMessage.isDelegated);
            writer.writeBooleanValue("isOutOfDate", eventMessage.isOutOfDate);
            writer.writeObjectValueFromMethod("location", eventMessage.location as any, serializeLocation);
            writer.writeEnumValue<MeetingMessageType>("meetingMessageType", eventMessage.meetingMessageType);
            writer.writeObjectValueFromMethod("recurrence", eventMessage.recurrence as any, serializePatternedRecurrence);
            writer.writeObjectValueFromMethod("startDateTime", eventMessage.startDateTime as any, serializeDateTimeTimeZone);
            writer.writeEnumValue<EventType>("type", eventMessage.type);
}
