import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoCalendarSharingMessage} from './deserializeIntoCalendarSharingMessage';
import {CalendarSharingMessageCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCalendarSharingMessageCollectionResponse(calendarSharingMessageCollectionResponse: CalendarSharingMessageCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(calendarSharingMessageCollectionResponse),
        "value": n => { calendarSharingMessageCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCalendarSharingMessage) as any ; },
    }
}
