import {BookingCustomerBase, Phone, PhysicalAddress} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingCustomer extends BookingCustomerBase, Partial<Parsable> {
    /** Addresses associated with the customer. The attribute type of physicalAddress is not supported in v1.0. Internally we map the addresses to the type others. */
    addresses?: PhysicalAddress[];
    /** The name of the customer. */
    displayName?: string;
    /** The SMTP address of the customer. */
    emailAddress?: string;
    /** Phone numbers associated with the customer, including home, business and mobile numbers. */
    phones?: Phone[];
}
