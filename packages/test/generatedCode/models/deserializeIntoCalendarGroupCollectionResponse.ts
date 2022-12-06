import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoCalendarGroup} from './deserializeIntoCalendarGroup';
import {CalendarGroupCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCalendarGroupCollectionResponse(calendarGroupCollectionResponse: CalendarGroupCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(calendarGroupCollectionResponse),
        "value": n => { calendarGroupCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCalendarGroup) as any ; },
    }
}
