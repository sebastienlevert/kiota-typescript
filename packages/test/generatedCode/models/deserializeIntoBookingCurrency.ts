import {deserializeIntoEntity} from './deserializeIntoEntity';
import {BookingCurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingCurrency(bookingCurrency: BookingCurrency | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(bookingCurrency),
        "symbol": n => { bookingCurrency.symbol = n.getStringValue() as any ; },
    }
}
