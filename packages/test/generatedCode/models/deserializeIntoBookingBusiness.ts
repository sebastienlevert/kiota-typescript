import {deserializeIntoBookingAppointment} from './deserializeIntoBookingAppointment';
import {deserializeIntoBookingCustomerBase} from './deserializeIntoBookingCustomerBase';
import {deserializeIntoBookingCustomQuestion} from './deserializeIntoBookingCustomQuestion';
import {deserializeIntoBookingSchedulingPolicy} from './deserializeIntoBookingSchedulingPolicy';
import {deserializeIntoBookingService} from './deserializeIntoBookingService';
import {deserializeIntoBookingStaffMemberBase} from './deserializeIntoBookingStaffMemberBase';
import {deserializeIntoBookingWorkHours} from './deserializeIntoBookingWorkHours';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoPhysicalAddress} from './deserializeIntoPhysicalAddress';
import {BookingBusiness} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingBusiness(bookingBusiness: BookingBusiness | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(bookingBusiness),
        "address": n => { bookingBusiness.address = n.getObject(deserializeIntoPhysicalAddress) as any ; },
        "appointments": n => { bookingBusiness.appointments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBookingAppointment) as any ; },
        "businessHours": n => { bookingBusiness.businessHours = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBookingWorkHours) as any ; },
        "businessType": n => { bookingBusiness.businessType = n.getStringValue() as any ; },
        "calendarView": n => { bookingBusiness.calendarView = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBookingAppointment) as any ; },
        "customers": n => { bookingBusiness.customers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBookingCustomerBase) as any ; },
        "customQuestions": n => { bookingBusiness.customQuestions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBookingCustomQuestion) as any ; },
        "defaultCurrencyIso": n => { bookingBusiness.defaultCurrencyIso = n.getStringValue() as any ; },
        "displayName": n => { bookingBusiness.displayName = n.getStringValue() as any ; },
        "email": n => { bookingBusiness.email = n.getStringValue() as any ; },
        "isPublished": n => { bookingBusiness.isPublished = n.getBooleanValue() as any ; },
        "languageTag": n => { bookingBusiness.languageTag = n.getStringValue() as any ; },
        "phone": n => { bookingBusiness.phone = n.getStringValue() as any ; },
        "publicUrl": n => { bookingBusiness.publicUrl = n.getStringValue() as any ; },
        "schedulingPolicy": n => { bookingBusiness.schedulingPolicy = n.getObject(deserializeIntoBookingSchedulingPolicy) as any ; },
        "services": n => { bookingBusiness.services = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBookingService) as any ; },
        "staffMembers": n => { bookingBusiness.staffMembers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBookingStaffMemberBase) as any ; },
        "webSiteUrl": n => { bookingBusiness.webSiteUrl = n.getStringValue() as any ; },
    }
}
