import {DayOfWeek} from './dayOfWeek';
import {BookingWorkHours} from './index';
import {serializeBookingWorkTimeSlot} from './serializeBookingWorkTimeSlot';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingWorkHours(writer: SerializationWriter, bookingWorkHours: BookingWorkHours | undefined = {}) : void {
            writer.writeEnumValue<DayOfWeek>("day", bookingWorkHours.day);
            writer.writeStringValue("@odata.type", bookingWorkHours.odataType);
            writer.writeCollectionOfObjectValuesFromMethod("timeSlots", bookingWorkHours.timeSlots as any, serializeBookingWorkTimeSlot);
}
