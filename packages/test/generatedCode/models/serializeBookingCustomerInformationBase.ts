import {BookingCustomerInformationBase} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingCustomerInformationBase(writer: SerializationWriter, bookingCustomerInformationBase: BookingCustomerInformationBase | undefined = {}) : void {
            writer.writeStringValue("@odata.type", bookingCustomerInformationBase.odataType);
}
