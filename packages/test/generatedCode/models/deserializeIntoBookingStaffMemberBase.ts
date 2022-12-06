import {deserializeIntoEntity} from './deserializeIntoEntity';
import {BookingStaffMemberBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingStaffMemberBase(bookingStaffMemberBase: BookingStaffMemberBase | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(bookingStaffMemberBase),
    }
}
