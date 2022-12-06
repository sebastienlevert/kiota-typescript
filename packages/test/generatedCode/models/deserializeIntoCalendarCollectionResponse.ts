import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoCalendar} from './deserializeIntoCalendar';
import {CalendarCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCalendarCollectionResponse(calendarCollectionResponse: CalendarCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(calendarCollectionResponse),
        "value": n => { calendarCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCalendar) as any ; },
    }
}
