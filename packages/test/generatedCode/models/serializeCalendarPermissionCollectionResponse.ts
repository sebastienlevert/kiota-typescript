import {CalendarPermissionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeCalendarPermission} from './serializeCalendarPermission';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCalendarPermissionCollectionResponse(writer: SerializationWriter, calendarPermissionCollectionResponse: CalendarPermissionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, calendarPermissionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", calendarPermissionCollectionResponse.value as any, serializeCalendarPermission);
}
