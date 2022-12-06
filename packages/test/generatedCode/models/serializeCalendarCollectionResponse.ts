import {CalendarCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeCalendar} from './serializeCalendar';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCalendarCollectionResponse(writer: SerializationWriter, calendarCollectionResponse: CalendarCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, calendarCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", calendarCollectionResponse.value as any, serializeCalendar);
}
