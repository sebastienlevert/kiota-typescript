import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoBookingService} from './deserializeIntoBookingService';
import {BookingServiceCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingServiceCollectionResponse(bookingServiceCollectionResponse: BookingServiceCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(bookingServiceCollectionResponse),
        "value": n => { bookingServiceCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBookingService) as any ; },
    }
}
