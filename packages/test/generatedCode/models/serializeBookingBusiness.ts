import {BookingBusiness} from './index';
import {serializeBookingAppointment} from './serializeBookingAppointment';
import {serializeBookingCustomerBase} from './serializeBookingCustomerBase';
import {serializeBookingCustomQuestion} from './serializeBookingCustomQuestion';
import {serializeBookingSchedulingPolicy} from './serializeBookingSchedulingPolicy';
import {serializeBookingService} from './serializeBookingService';
import {serializeBookingStaffMemberBase} from './serializeBookingStaffMemberBase';
import {serializeBookingWorkHours} from './serializeBookingWorkHours';
import {serializeEntity} from './serializeEntity';
import {serializePhysicalAddress} from './serializePhysicalAddress';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingBusiness(writer: SerializationWriter, bookingBusiness: BookingBusiness | undefined = {}) : void {
        serializeEntity(writer, bookingBusiness)
            writer.writeObjectValueFromMethod("address", bookingBusiness.address as any, serializePhysicalAddress);
            writer.writeCollectionOfObjectValuesFromMethod("appointments", bookingBusiness.appointments as any, serializeBookingAppointment);
            writer.writeCollectionOfObjectValuesFromMethod("businessHours", bookingBusiness.businessHours as any, serializeBookingWorkHours);
            writer.writeStringValue("businessType", bookingBusiness.businessType);
            writer.writeCollectionOfObjectValuesFromMethod("calendarView", bookingBusiness.calendarView as any, serializeBookingAppointment);
            writer.writeCollectionOfObjectValuesFromMethod("customers", bookingBusiness.customers as any, serializeBookingCustomerBase);
            writer.writeCollectionOfObjectValuesFromMethod("customQuestions", bookingBusiness.customQuestions as any, serializeBookingCustomQuestion);
            writer.writeStringValue("defaultCurrencyIso", bookingBusiness.defaultCurrencyIso);
            writer.writeStringValue("displayName", bookingBusiness.displayName);
            writer.writeStringValue("email", bookingBusiness.email);
            writer.writeBooleanValue("isPublished", bookingBusiness.isPublished);
            writer.writeStringValue("languageTag", bookingBusiness.languageTag);
            writer.writeStringValue("phone", bookingBusiness.phone);
            writer.writeStringValue("publicUrl", bookingBusiness.publicUrl);
            writer.writeObjectValueFromMethod("schedulingPolicy", bookingBusiness.schedulingPolicy as any, serializeBookingSchedulingPolicy);
            writer.writeCollectionOfObjectValuesFromMethod("services", bookingBusiness.services as any, serializeBookingService);
            writer.writeCollectionOfObjectValuesFromMethod("staffMembers", bookingBusiness.staffMembers as any, serializeBookingStaffMemberBase);
            writer.writeStringValue("webSiteUrl", bookingBusiness.webSiteUrl);
}
