import {TimeSlotCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTimeSlot} from './serializeTimeSlot';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTimeSlotCollectionResponse(writer: SerializationWriter, timeSlotCollectionResponse: TimeSlotCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, timeSlotCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", timeSlotCollectionResponse.value as any, serializeTimeSlot);
}
