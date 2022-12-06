import {BookingStaffMemberBase} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingStaffMemberBase(writer: SerializationWriter, bookingStaffMemberBase: BookingStaffMemberBase | undefined = {}) : void {
        serializeEntity(writer, bookingStaffMemberBase)
}
