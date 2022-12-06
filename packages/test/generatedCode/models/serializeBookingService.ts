import {BookingPriceType} from './bookingPriceType';
import {BookingService} from './index';
import {serializeBookingQuestionAssignment} from './serializeBookingQuestionAssignment';
import {serializeBookingReminder} from './serializeBookingReminder';
import {serializeBookingSchedulingPolicy} from './serializeBookingSchedulingPolicy';
import {serializeEntity} from './serializeEntity';
import {serializeLocation} from './serializeLocation';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingService(writer: SerializationWriter, bookingService: BookingService | undefined = {}) : void {
        serializeEntity(writer, bookingService)
            writer.writeStringValue("additionalInformation", bookingService.additionalInformation);
            writer.writeCollectionOfObjectValuesFromMethod("customQuestions", bookingService.customQuestions as any, serializeBookingQuestionAssignment);
            writer.writeDurationValue("defaultDuration", bookingService.defaultDuration);
            writer.writeObjectValueFromMethod("defaultLocation", bookingService.defaultLocation as any, serializeLocation);
            writer.writeNumberValue("defaultPrice", bookingService.defaultPrice);
            writer.writeEnumValue<BookingPriceType>("defaultPriceType", bookingService.defaultPriceType);
            writer.writeCollectionOfObjectValuesFromMethod("defaultReminders", bookingService.defaultReminders as any, serializeBookingReminder);
            writer.writeStringValue("description", bookingService.description);
            writer.writeStringValue("displayName", bookingService.displayName);
            writer.writeBooleanValue("isAnonymousJoinEnabled", bookingService.isAnonymousJoinEnabled);
            writer.writeBooleanValue("isHiddenFromCustomers", bookingService.isHiddenFromCustomers);
            writer.writeBooleanValue("isLocationOnline", bookingService.isLocationOnline);
            writer.writeStringValue("languageTag", bookingService.languageTag);
            writer.writeNumberValue("maximumAttendeesCount", bookingService.maximumAttendeesCount);
            writer.writeStringValue("notes", bookingService.notes);
            writer.writeDurationValue("postBuffer", bookingService.postBuffer);
            writer.writeDurationValue("preBuffer", bookingService.preBuffer);
            writer.writeObjectValueFromMethod("schedulingPolicy", bookingService.schedulingPolicy as any, serializeBookingSchedulingPolicy);
            writer.writeBooleanValue("smsNotificationsEnabled", bookingService.smsNotificationsEnabled);
            writer.writeCollectionOfPrimitiveValues<string>("staffMemberIds", bookingService.staffMemberIds);
            writer.writeStringValue("webUrl", bookingService.webUrl);
}
