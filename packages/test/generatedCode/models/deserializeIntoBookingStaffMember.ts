import {BookingStaffRole} from './bookingStaffRole';
import {deserializeIntoBookingStaffMemberBase} from './deserializeIntoBookingStaffMemberBase';
import {deserializeIntoBookingWorkHours} from './deserializeIntoBookingWorkHours';
import {BookingStaffMember} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingStaffMember(bookingStaffMember: BookingStaffMember | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBookingStaffMemberBase(bookingStaffMember),
        "availabilityIsAffectedByPersonalCalendar": n => { bookingStaffMember.availabilityIsAffectedByPersonalCalendar = n.getBooleanValue() as any ; },
        "displayName": n => { bookingStaffMember.displayName = n.getStringValue() as any ; },
        "emailAddress": n => { bookingStaffMember.emailAddress = n.getStringValue() as any ; },
        "isEmailNotificationEnabled": n => { bookingStaffMember.isEmailNotificationEnabled = n.getBooleanValue() as any ; },
        "role": n => { bookingStaffMember.role = n.getEnumValue<BookingStaffRole>(BookingStaffRole) as any ; },
        "timeZone": n => { bookingStaffMember.timeZone = n.getStringValue() as any ; },
        "useBusinessHours": n => { bookingStaffMember.useBusinessHours = n.getBooleanValue() as any ; },
        "workingHours": n => { bookingStaffMember.workingHours = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBookingWorkHours) as any ; },
    }
}
