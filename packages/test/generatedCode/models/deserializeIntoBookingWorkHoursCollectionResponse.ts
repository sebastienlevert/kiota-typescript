import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoBookingWorkHours} from './deserializeIntoBookingWorkHours';
import {BookingWorkHoursCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingWorkHoursCollectionResponse(bookingWorkHoursCollectionResponse: BookingWorkHoursCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(bookingWorkHoursCollectionResponse),
        "value": n => { bookingWorkHoursCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBookingWorkHours) as any ; },
    }
}
