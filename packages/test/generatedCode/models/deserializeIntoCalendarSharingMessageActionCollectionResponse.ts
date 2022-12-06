import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoCalendarSharingMessageAction} from './deserializeIntoCalendarSharingMessageAction';
import {CalendarSharingMessageActionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCalendarSharingMessageActionCollectionResponse(calendarSharingMessageActionCollectionResponse: CalendarSharingMessageActionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(calendarSharingMessageActionCollectionResponse),
        "value": n => { calendarSharingMessageActionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCalendarSharingMessageAction) as any ; },
    }
}
