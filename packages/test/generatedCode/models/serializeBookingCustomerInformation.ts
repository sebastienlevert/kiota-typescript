import {BookingCustomerInformation} from './index';
import {serializeBookingCustomerInformationBase} from './serializeBookingCustomerInformationBase';
import {serializeBookingQuestionAnswer} from './serializeBookingQuestionAnswer';
import {serializeLocation} from './serializeLocation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingCustomerInformation(writer: SerializationWriter, bookingCustomerInformation: BookingCustomerInformation | undefined = {}) : void {
        serializeBookingCustomerInformationBase(writer, bookingCustomerInformation)
            writer.writeStringValue("customerId", bookingCustomerInformation.customerId);
            writer.writeCollectionOfObjectValuesFromMethod("customQuestionAnswers", bookingCustomerInformation.customQuestionAnswers as any, serializeBookingQuestionAnswer);
            writer.writeStringValue("emailAddress", bookingCustomerInformation.emailAddress);
            writer.writeObjectValueFromMethod("location", bookingCustomerInformation.location as any, serializeLocation);
            writer.writeStringValue("name", bookingCustomerInformation.name);
            writer.writeStringValue("notes", bookingCustomerInformation.notes);
            writer.writeStringValue("phone", bookingCustomerInformation.phone);
            writer.writeStringValue("timeZone", bookingCustomerInformation.timeZone);
}
