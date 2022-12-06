import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoBookingCustomerBase} from './deserializeIntoBookingCustomerBase';
import {BookingCustomerBaseCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingCustomerBaseCollectionResponse(bookingCustomerBaseCollectionResponse: BookingCustomerBaseCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(bookingCustomerBaseCollectionResponse),
        "value": n => { bookingCustomerBaseCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBookingCustomerBase) as any ; },
    }
}
