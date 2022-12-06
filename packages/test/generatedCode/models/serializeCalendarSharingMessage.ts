import {CalendarSharingMessage} from './index';
import {serializeCalendarSharingMessageAction} from './serializeCalendarSharingMessageAction';
import {serializeMessage} from './serializeMessage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCalendarSharingMessage(writer: SerializationWriter, calendarSharingMessage: CalendarSharingMessage | undefined = {}) : void {
        serializeMessage(writer, calendarSharingMessage)
            writer.writeBooleanValue("canAccept", calendarSharingMessage.canAccept);
            writer.writeObjectValueFromMethod("sharingMessageAction", calendarSharingMessage.sharingMessageAction as any, serializeCalendarSharingMessageAction);
            writer.writeCollectionOfObjectValuesFromMethod("sharingMessageActions", calendarSharingMessage.sharingMessageActions as any, serializeCalendarSharingMessageAction);
            writer.writeStringValue("suggestedCalendarName", calendarSharingMessage.suggestedCalendarName);
}
