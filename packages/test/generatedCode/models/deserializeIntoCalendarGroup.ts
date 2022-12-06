import {deserializeIntoCalendar} from './deserializeIntoCalendar';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {CalendarGroup} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCalendarGroup(calendarGroup: CalendarGroup | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(calendarGroup),
        "calendars": n => { calendarGroup.calendars = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCalendar) as any ; },
        "changeKey": n => { calendarGroup.changeKey = n.getStringValue() as any ; },
        "classId": n => { calendarGroup.classId = n.getStringValue() as any ; },
        "name": n => { calendarGroup.name = n.getStringValue() as any ; },
    }
}
