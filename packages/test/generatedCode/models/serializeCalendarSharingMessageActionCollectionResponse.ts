import {CalendarSharingMessageActionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeCalendarSharingMessageAction} from './serializeCalendarSharingMessageAction';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCalendarSharingMessageActionCollectionResponse(writer: SerializationWriter, calendarSharingMessageActionCollectionResponse: CalendarSharingMessageActionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, calendarSharingMessageActionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", calendarSharingMessageActionCollectionResponse.value as any, serializeCalendarSharingMessageAction);
}
