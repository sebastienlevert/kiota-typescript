import {CalendarSharingMessageCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeCalendarSharingMessage} from './serializeCalendarSharingMessage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCalendarSharingMessageCollectionResponse(writer: SerializationWriter, calendarSharingMessageCollectionResponse: CalendarSharingMessageCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, calendarSharingMessageCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", calendarSharingMessageCollectionResponse.value as any, serializeCalendarSharingMessage);
}
