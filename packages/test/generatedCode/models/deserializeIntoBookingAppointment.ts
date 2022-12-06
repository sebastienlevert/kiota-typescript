import {BookingPriceType} from './bookingPriceType';
import {deserializeIntoBookingCustomerInformationBase} from './deserializeIntoBookingCustomerInformationBase';
import {deserializeIntoBookingReminder} from './deserializeIntoBookingReminder';
import {deserializeIntoDateTimeTimeZone} from './deserializeIntoDateTimeTimeZone';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoLocation} from './deserializeIntoLocation';
import {BookingAppointment} from './index';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingAppointment(bookingAppointment: BookingAppointment | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(bookingAppointment),
        "additionalInformation": n => { bookingAppointment.additionalInformation = n.getStringValue() as any ; },
        "anonymousJoinWebUrl": n => { bookingAppointment.anonymousJoinWebUrl = n.getStringValue() as any ; },
        "customers": n => { bookingAppointment.customers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBookingCustomerInformationBase) as any ; },
        "customerTimeZone": n => { bookingAppointment.customerTimeZone = n.getStringValue() as any ; },
        "duration": n => { bookingAppointment.duration = n.getDurationValue() as any ; },
        "endDateTime": n => { bookingAppointment.endDateTime = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
        "filledAttendeesCount": n => { bookingAppointment.filledAttendeesCount = n.getNumberValue() as any ; },
        "isLocationOnline": n => { bookingAppointment.isLocationOnline = n.getBooleanValue() as any ; },
        "joinWebUrl": n => { bookingAppointment.joinWebUrl = n.getStringValue() as any ; },
        "maximumAttendeesCount": n => { bookingAppointment.maximumAttendeesCount = n.getNumberValue() as any ; },
        "optOutOfCustomerEmail": n => { bookingAppointment.optOutOfCustomerEmail = n.getBooleanValue() as any ; },
        "postBuffer": n => { bookingAppointment.postBuffer = n.getDurationValue() as any ; },
        "preBuffer": n => { bookingAppointment.preBuffer = n.getDurationValue() as any ; },
        "price": n => { bookingAppointment.price = n.getNumberValue() as any ; },
        "priceType": n => { bookingAppointment.priceType = n.getEnumValue<BookingPriceType>(BookingPriceType) as any ; },
        "reminders": n => { bookingAppointment.reminders = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBookingReminder) as any ; },
        "selfServiceAppointmentId": n => { bookingAppointment.selfServiceAppointmentId = n.getStringValue() as any ; },
        "serviceId": n => { bookingAppointment.serviceId = n.getStringValue() as any ; },
        "serviceLocation": n => { bookingAppointment.serviceLocation = n.getObject(deserializeIntoLocation) as any ; },
        "serviceName": n => { bookingAppointment.serviceName = n.getStringValue() as any ; },
        "serviceNotes": n => { bookingAppointment.serviceNotes = n.getStringValue() as any ; },
        "smsNotificationsEnabled": n => { bookingAppointment.smsNotificationsEnabled = n.getBooleanValue() as any ; },
        "staffMemberIds": n => { bookingAppointment.staffMemberIds = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "startDateTime": n => { bookingAppointment.startDateTime = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
    }
}
