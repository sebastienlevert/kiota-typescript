import {deserializeIntoBookingCustomerInformationBase} from './deserializeIntoBookingCustomerInformationBase';
import {deserializeIntoBookingQuestionAnswer} from './deserializeIntoBookingQuestionAnswer';
import {deserializeIntoLocation} from './deserializeIntoLocation';
import {BookingCustomerInformation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingCustomerInformation(bookingCustomerInformation: BookingCustomerInformation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBookingCustomerInformationBase(bookingCustomerInformation),
        "customerId": n => { bookingCustomerInformation.customerId = n.getStringValue() as any ; },
        "customQuestionAnswers": n => { bookingCustomerInformation.customQuestionAnswers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBookingQuestionAnswer) as any ; },
        "emailAddress": n => { bookingCustomerInformation.emailAddress = n.getStringValue() as any ; },
        "location": n => { bookingCustomerInformation.location = n.getObject(deserializeIntoLocation) as any ; },
        "name": n => { bookingCustomerInformation.name = n.getStringValue() as any ; },
        "notes": n => { bookingCustomerInformation.notes = n.getStringValue() as any ; },
        "phone": n => { bookingCustomerInformation.phone = n.getStringValue() as any ; },
        "timeZone": n => { bookingCustomerInformation.timeZone = n.getStringValue() as any ; },
    }
}
