import {BookingCurrency} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingCurrency(writer: SerializationWriter, bookingCurrency: BookingCurrency | undefined = {}) : void {
        serializeEntity(writer, bookingCurrency)
            writer.writeStringValue("symbol", bookingCurrency.symbol);
}
