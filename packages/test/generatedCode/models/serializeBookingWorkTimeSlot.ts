import {BookingWorkTimeSlot} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export function serializeBookingWorkTimeSlot(writer: SerializationWriter, bookingWorkTimeSlot: BookingWorkTimeSlot | undefined = {}) : void {
            writer.writeTimeOnlyValue("endTime", bookingWorkTimeSlot.endTime);
            writer.writeStringValue("@odata.type", bookingWorkTimeSlot.odataType);
            writer.writeTimeOnlyValue("startTime", bookingWorkTimeSlot.startTime);
}
