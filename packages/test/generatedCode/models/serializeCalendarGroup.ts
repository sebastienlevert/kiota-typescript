import {CalendarGroup} from './index';
import {serializeCalendar} from './serializeCalendar';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCalendarGroup(writer: SerializationWriter, calendarGroup: CalendarGroup | undefined = {}) : void {
        serializeEntity(writer, calendarGroup)
            writer.writeCollectionOfObjectValuesFromMethod("calendars", calendarGroup.calendars as any, serializeCalendar);
            writer.writeStringValue("changeKey", calendarGroup.changeKey);
            writer.writeStringValue("classId", calendarGroup.classId);
            writer.writeStringValue("name", calendarGroup.name);
}
