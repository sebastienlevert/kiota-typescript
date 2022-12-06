import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoBookingBusiness} from './deserializeIntoBookingBusiness';
import {BookingBusinessCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingBusinessCollectionResponse(bookingBusinessCollectionResponse: BookingBusinessCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(bookingBusinessCollectionResponse),
        "value": n => { bookingBusinessCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBookingBusiness) as any ; },
    }
}
