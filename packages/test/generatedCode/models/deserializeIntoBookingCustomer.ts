import {deserializeIntoBookingCustomerBase} from './deserializeIntoBookingCustomerBase';
import {deserializeIntoPhone} from './deserializeIntoPhone';
import {deserializeIntoPhysicalAddress} from './deserializeIntoPhysicalAddress';
import {BookingCustomer} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingCustomer(bookingCustomer: BookingCustomer | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBookingCustomerBase(bookingCustomer),
        "addresses": n => { bookingCustomer.addresses = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPhysicalAddress) as any ; },
        "displayName": n => { bookingCustomer.displayName = n.getStringValue() as any ; },
        "emailAddress": n => { bookingCustomer.emailAddress = n.getStringValue() as any ; },
        "phones": n => { bookingCustomer.phones = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPhone) as any ; },
    }
}
