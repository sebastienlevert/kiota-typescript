import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoBookingCustomerInformationBase} from './deserializeIntoBookingCustomerInformationBase';
import {BookingCustomerInformationBaseCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingCustomerInformationBaseCollectionResponse(bookingCustomerInformationBaseCollectionResponse: BookingCustomerInformationBaseCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(bookingCustomerInformationBaseCollectionResponse),
        "value": n => { bookingCustomerInformationBaseCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBookingCustomerInformationBase) as any ; },
    }
}
