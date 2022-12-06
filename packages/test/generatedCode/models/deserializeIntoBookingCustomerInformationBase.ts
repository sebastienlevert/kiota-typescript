import {BookingCustomerInformationBase} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingCustomerInformationBase(bookingCustomerInformationBase: BookingCustomerInformationBase | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { bookingCustomerInformationBase.odataType = n.getStringValue() as any ; },
    }
}
