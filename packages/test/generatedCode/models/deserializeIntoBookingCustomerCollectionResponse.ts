import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoBookingCustomer} from './deserializeIntoBookingCustomer';
import {BookingCustomerCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingCustomerCollectionResponse(bookingCustomerCollectionResponse: BookingCustomerCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(bookingCustomerCollectionResponse),
        "value": n => { bookingCustomerCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBookingCustomer) as any ; },
    }
}
