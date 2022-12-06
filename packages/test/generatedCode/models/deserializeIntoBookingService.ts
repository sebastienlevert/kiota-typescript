import {BookingPriceType} from './bookingPriceType';
import {deserializeIntoBookingQuestionAssignment} from './deserializeIntoBookingQuestionAssignment';
import {deserializeIntoBookingReminder} from './deserializeIntoBookingReminder';
import {deserializeIntoBookingSchedulingPolicy} from './deserializeIntoBookingSchedulingPolicy';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoLocation} from './deserializeIntoLocation';
import {BookingService} from './index';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingService(bookingService: BookingService | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(bookingService),
        "additionalInformation": n => { bookingService.additionalInformation = n.getStringValue() as any ; },
        "customQuestions": n => { bookingService.customQuestions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBookingQuestionAssignment) as any ; },
        "defaultDuration": n => { bookingService.defaultDuration = n.getDurationValue() as any ; },
        "defaultLocation": n => { bookingService.defaultLocation = n.getObject(deserializeIntoLocation) as any ; },
        "defaultPrice": n => { bookingService.defaultPrice = n.getNumberValue() as any ; },
        "defaultPriceType": n => { bookingService.defaultPriceType = n.getEnumValue<BookingPriceType>(BookingPriceType) as any ; },
        "defaultReminders": n => { bookingService.defaultReminders = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBookingReminder) as any ; },
        "description": n => { bookingService.description = n.getStringValue() as any ; },
        "displayName": n => { bookingService.displayName = n.getStringValue() as any ; },
        "isAnonymousJoinEnabled": n => { bookingService.isAnonymousJoinEnabled = n.getBooleanValue() as any ; },
        "isHiddenFromCustomers": n => { bookingService.isHiddenFromCustomers = n.getBooleanValue() as any ; },
        "isLocationOnline": n => { bookingService.isLocationOnline = n.getBooleanValue() as any ; },
        "languageTag": n => { bookingService.languageTag = n.getStringValue() as any ; },
        "maximumAttendeesCount": n => { bookingService.maximumAttendeesCount = n.getNumberValue() as any ; },
        "notes": n => { bookingService.notes = n.getStringValue() as any ; },
        "postBuffer": n => { bookingService.postBuffer = n.getDurationValue() as any ; },
        "preBuffer": n => { bookingService.preBuffer = n.getDurationValue() as any ; },
        "schedulingPolicy": n => { bookingService.schedulingPolicy = n.getObject(deserializeIntoBookingSchedulingPolicy) as any ; },
        "smsNotificationsEnabled": n => { bookingService.smsNotificationsEnabled = n.getBooleanValue() as any ; },
        "staffMemberIds": n => { bookingService.staffMemberIds = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "webUrl": n => { bookingService.webUrl = n.getStringValue() as any ; },
    }
}
