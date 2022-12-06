import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoBookingWorkTimeSlot} from './deserializeIntoBookingWorkTimeSlot';
import {BookingWorkTimeSlotCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingWorkTimeSlotCollectionResponse(bookingWorkTimeSlotCollectionResponse: BookingWorkTimeSlotCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(bookingWorkTimeSlotCollectionResponse),
        "value": n => { bookingWorkTimeSlotCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBookingWorkTimeSlot) as any ; },
    }
}
