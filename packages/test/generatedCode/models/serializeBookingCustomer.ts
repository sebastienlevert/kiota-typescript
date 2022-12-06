import {BookingCustomer} from './index';
import {serializeBookingCustomerBase} from './serializeBookingCustomerBase';
import {serializePhone} from './serializePhone';
import {serializePhysicalAddress} from './serializePhysicalAddress';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingCustomer(writer: SerializationWriter, bookingCustomer: BookingCustomer | undefined = {}) : void {
        serializeBookingCustomerBase(writer, bookingCustomer)
            writer.writeCollectionOfObjectValuesFromMethod("addresses", bookingCustomer.addresses as any, serializePhysicalAddress);
            writer.writeStringValue("displayName", bookingCustomer.displayName);
            writer.writeStringValue("emailAddress", bookingCustomer.emailAddress);
            writer.writeCollectionOfObjectValuesFromMethod("phones", bookingCustomer.phones as any, serializePhone);
}
