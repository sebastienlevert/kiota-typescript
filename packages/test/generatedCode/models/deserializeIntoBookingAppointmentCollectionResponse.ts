import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoBookingAppointment} from './deserializeIntoBookingAppointment';
import {BookingAppointmentCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingAppointmentCollectionResponse(bookingAppointmentCollectionResponse: BookingAppointmentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(bookingAppointmentCollectionResponse),
        "value": n => { bookingAppointmentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBookingAppointment) as any ; },
    }
}
