import {BookingCustomerCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBookingCustomer} from './serializeBookingCustomer';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingCustomerCollectionResponse(writer: SerializationWriter, bookingCustomerCollectionResponse: BookingCustomerCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bookingCustomerCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", bookingCustomerCollectionResponse.value as any, serializeBookingCustomer);
}
