import {BookingAppointmentCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBookingAppointment} from './serializeBookingAppointment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingAppointmentCollectionResponse(writer: SerializationWriter, bookingAppointmentCollectionResponse: BookingAppointmentCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bookingAppointmentCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", bookingAppointmentCollectionResponse.value as any, serializeBookingAppointment);
}
