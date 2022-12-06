import {BookingWorkTimeSlotCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBookingWorkTimeSlot} from './serializeBookingWorkTimeSlot';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingWorkTimeSlotCollectionResponse(writer: SerializationWriter, bookingWorkTimeSlotCollectionResponse: BookingWorkTimeSlotCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bookingWorkTimeSlotCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", bookingWorkTimeSlotCollectionResponse.value as any, serializeBookingWorkTimeSlot);
}
