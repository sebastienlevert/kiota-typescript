import {BookingCustomerBaseCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBookingCustomerBase} from './serializeBookingCustomerBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingCustomerBaseCollectionResponse(writer: SerializationWriter, bookingCustomerBaseCollectionResponse: BookingCustomerBaseCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bookingCustomerBaseCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", bookingCustomerBaseCollectionResponse.value as any, serializeBookingCustomerBase);
}
