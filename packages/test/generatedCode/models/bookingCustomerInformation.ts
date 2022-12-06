import {BookingCustomerInformationBase, BookingQuestionAnswer, Location} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingCustomerInformation extends BookingCustomerInformationBase, Partial<Parsable> {
    /** The ID of the bookingCustomer for this appointment. If no ID is specified when an appointment is created, then a new bookingCustomer object is created. Once set, you should consider the customerId immutable. */
    customerId?: string;
    /** It consists of the list of custom questions and answers given by the customer as part of the appointment */
    customQuestionAnswers?: BookingQuestionAnswer[];
    /** The SMTP address of the bookingCustomer who is booking the appointment */
    emailAddress?: string;
    /** Represents location information for the bookingCustomer who is booking the appointment. */
    location?: Location;
    /** The customer's name. */
    name?: string;
    /** Notes from the customer associated with this appointment. You can get the value only when reading this bookingAppointment by its ID. You can set this property only when initially creating an appointment with a new customer. After that point, the value is computed from the customer represented by the customerId. */
    notes?: string;
    /** The customer's phone number. */
    phone?: string;
    /** The time zone of the customer. For a list of possible values, see dateTimeTimeZone. */
    timeZone?: string;
}
