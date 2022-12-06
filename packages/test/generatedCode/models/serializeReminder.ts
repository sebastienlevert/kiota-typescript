import {Reminder} from './index';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {serializeLocation} from './serializeLocation';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeReminder(writer: SerializationWriter, reminder: Reminder | undefined = {}) : void {
            writer.writeStringValue("changeKey", reminder.changeKey);
            writer.writeObjectValueFromMethod("eventEndTime", reminder.eventEndTime as any, serializeDateTimeTimeZone);
            writer.writeStringValue("eventId", reminder.eventId);
            writer.writeObjectValueFromMethod("eventLocation", reminder.eventLocation as any, serializeLocation);
            writer.writeObjectValueFromMethod("eventStartTime", reminder.eventStartTime as any, serializeDateTimeTimeZone);
            writer.writeStringValue("eventSubject", reminder.eventSubject);
            writer.writeStringValue("eventWebLink", reminder.eventWebLink);
            writer.writeStringValue("@odata.type", reminder.odataType);
            writer.writeObjectValueFromMethod("reminderFireTime", reminder.reminderFireTime as any, serializeDateTimeTimeZone);
}
