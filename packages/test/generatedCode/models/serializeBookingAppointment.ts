import {BookingPriceType} from './bookingPriceType';
import {BookingAppointment} from './index';
import {serializeBookingCustomerInformationBase} from './serializeBookingCustomerInformationBase';
import {serializeBookingReminder} from './serializeBookingReminder';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {serializeEntity} from './serializeEntity';
import {serializeLocation} from './serializeLocation';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingAppointment(writer: SerializationWriter, bookingAppointment: BookingAppointment | undefined = {}) : void {
        serializeEntity(writer, bookingAppointment)
            writer.writeStringValue("additionalInformation", bookingAppointment.additionalInformation);
            writer.writeStringValue("anonymousJoinWebUrl", bookingAppointment.anonymousJoinWebUrl);
            writer.writeCollectionOfObjectValuesFromMethod("customers", bookingAppointment.customers as any, serializeBookingCustomerInformationBase);
            writer.writeStringValue("customerTimeZone", bookingAppointment.customerTimeZone);
            writer.writeDurationValue("duration", bookingAppointment.duration);
            writer.writeObjectValueFromMethod("endDateTime", bookingAppointment.endDateTime as any, serializeDateTimeTimeZone);
            writer.writeNumberValue("filledAttendeesCount", bookingAppointment.filledAttendeesCount);
            writer.writeBooleanValue("isLocationOnline", bookingAppointment.isLocationOnline);
            writer.writeStringValue("joinWebUrl", bookingAppointment.joinWebUrl);
            writer.writeNumberValue("maximumAttendeesCount", bookingAppointment.maximumAttendeesCount);
            writer.writeBooleanValue("optOutOfCustomerEmail", bookingAppointment.optOutOfCustomerEmail);
            writer.writeDurationValue("postBuffer", bookingAppointment.postBuffer);
            writer.writeDurationValue("preBuffer", bookingAppointment.preBuffer);
            writer.writeNumberValue("price", bookingAppointment.price);
            writer.writeEnumValue<BookingPriceType>("priceType", bookingAppointment.priceType);
            writer.writeCollectionOfObjectValuesFromMethod("reminders", bookingAppointment.reminders as any, serializeBookingReminder);
            writer.writeStringValue("selfServiceAppointmentId", bookingAppointment.selfServiceAppointmentId);
            writer.writeStringValue("serviceId", bookingAppointment.serviceId);
            writer.writeObjectValueFromMethod("serviceLocation", bookingAppointment.serviceLocation as any, serializeLocation);
            writer.writeStringValue("serviceName", bookingAppointment.serviceName);
            writer.writeStringValue("serviceNotes", bookingAppointment.serviceNotes);
            writer.writeBooleanValue("smsNotificationsEnabled", bookingAppointment.smsNotificationsEnabled);
            writer.writeCollectionOfPrimitiveValues<string>("staffMemberIds", bookingAppointment.staffMemberIds);
            writer.writeObjectValueFromMethod("startDateTime", bookingAppointment.startDateTime as any, serializeDateTimeTimeZone);
}
