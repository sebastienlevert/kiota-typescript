import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoCalendarPermission} from './deserializeIntoCalendarPermission';
import {CalendarPermissionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCalendarPermissionCollectionResponse(calendarPermissionCollectionResponse: CalendarPermissionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(calendarPermissionCollectionResponse),
        "value": n => { calendarPermissionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCalendarPermission) as any ; },
    }
}
