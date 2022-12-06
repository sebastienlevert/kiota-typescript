import {BookingCustomerBase} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingCustomerBase(writer: SerializationWriter, bookingCustomerBase: BookingCustomerBase | undefined = {}) : void {
        serializeEntity(writer, bookingCustomerBase)
}
