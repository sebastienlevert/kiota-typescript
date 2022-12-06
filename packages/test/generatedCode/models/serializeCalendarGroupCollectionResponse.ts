import {CalendarGroupCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeCalendarGroup} from './serializeCalendarGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCalendarGroupCollectionResponse(writer: SerializationWriter, calendarGroupCollectionResponse: CalendarGroupCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, calendarGroupCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", calendarGroupCollectionResponse.value as any, serializeCalendarGroup);
}
