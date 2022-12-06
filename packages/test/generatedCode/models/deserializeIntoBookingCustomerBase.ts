import {deserializeIntoEntity} from './deserializeIntoEntity';
import {BookingCustomerBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingCustomerBase(bookingCustomerBase: BookingCustomerBase | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(bookingCustomerBase),
    }
}
