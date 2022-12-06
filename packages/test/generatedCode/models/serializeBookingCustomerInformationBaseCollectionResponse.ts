import {BookingCustomerInformationBaseCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBookingCustomerInformationBase} from './serializeBookingCustomerInformationBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingCustomerInformationBaseCollectionResponse(writer: SerializationWriter, bookingCustomerInformationBaseCollectionResponse: BookingCustomerInformationBaseCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bookingCustomerInformationBaseCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", bookingCustomerInformationBaseCollectionResponse.value as any, serializeBookingCustomerInformationBase);
}
