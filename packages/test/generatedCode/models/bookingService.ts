import {BookingPriceType} from './bookingPriceType';
import {BookingQuestionAssignment, BookingReminder, BookingSchedulingPolicy, Entity, Location} from './index';
import {Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface BookingService extends Entity, Partial<Parsable> {
    /** Additional information that is sent to the customer when an appointment is confirmed. */
    additionalInformation?: string;
    /** Contains the set of custom questions associated with a particular service. */
    customQuestions?: BookingQuestionAssignment[];
    /** The default length of the service, represented in numbers of days, hours, minutes, and seconds. For example, P11D23H59M59.999999999999S. */
    defaultDuration?: Duration;
    /** The default physical location for the service. */
    defaultLocation?: Location;
    /** The default monetary price for the service. */
    defaultPrice?: number;
    /** Represents the type of pricing of a booking service. */
    defaultPriceType?: BookingPriceType;
    /** The default set of reminders for an appointment of this service. The value of this property is available only when reading this bookingService by its ID. */
    defaultReminders?: BookingReminder[];
    /** A text description for the service. */
    description?: string;
    /** A service name. */
    displayName?: string;
    /** The isAnonymousJoinEnabled property */
    isAnonymousJoinEnabled?: boolean;
    /** True means this service is not available to customers for booking. */
    isHiddenFromCustomers?: boolean;
    /** True indicates that the appointments for the service will be held online. Default value is false. */
    isLocationOnline?: boolean;
    /** The languageTag property */
    languageTag?: string;
    /** The maximum number of customers allowed in a service. If maximumAttendeesCount of the service is greater than 1, pass valid customer IDs while creating or updating an appointment. To create a customer, use the Create bookingCustomer operation. */
    maximumAttendeesCount?: number;
    /** Additional information about this service. */
    notes?: string;
    /** The time to buffer after an appointment for this service ends, and before the next customer appointment can be booked. */
    postBuffer?: Duration;
    /** The time to buffer before an appointment for this service can start. */
    preBuffer?: Duration;
    /** The set of policies that determine how appointments for this type of service should be created and managed. */
    schedulingPolicy?: BookingSchedulingPolicy;
    /** True indicates SMS notifications can be sent to the customers for the appointment of the service. Default value is false. */
    smsNotificationsEnabled?: boolean;
    /** Represents those staff members who provide this service. */
    staffMemberIds?: string[];
    /** The URL a customer uses to access the service. */
    webUrl?: string;
}
