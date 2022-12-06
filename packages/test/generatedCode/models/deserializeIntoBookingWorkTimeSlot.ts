import {BookingWorkTimeSlot} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingWorkTimeSlot(bookingWorkTimeSlot: BookingWorkTimeSlot | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "endTime": n => { bookingWorkTimeSlot.endTime = n.getTimeOnlyValue() as any ; },
        "@odata.type": n => { bookingWorkTimeSlot.odataType = n.getStringValue() as any ; },
        "startTime": n => { bookingWorkTimeSlot.startTime = n.getTimeOnlyValue() as any ; },
    }
}
