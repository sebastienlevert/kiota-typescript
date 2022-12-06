import {BookingCurrencyCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBookingCurrency} from './serializeBookingCurrency';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingCurrencyCollectionResponse(writer: SerializationWriter, bookingCurrencyCollectionResponse: BookingCurrencyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bookingCurrencyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", bookingCurrencyCollectionResponse.value as any, serializeBookingCurrency);
}
