import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoBookingCurrency} from './deserializeIntoBookingCurrency';
import {BookingCurrencyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingCurrencyCollectionResponse(bookingCurrencyCollectionResponse: BookingCurrencyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(bookingCurrencyCollectionResponse),
        "value": n => { bookingCurrencyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBookingCurrency) as any ; },
    }
}
