import {BookingSchedulingPolicy} from './index';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingSchedulingPolicy(bookingSchedulingPolicy: BookingSchedulingPolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "allowStaffSelection": n => { bookingSchedulingPolicy.allowStaffSelection = n.getBooleanValue() as any ; },
        "maximumAdvance": n => { bookingSchedulingPolicy.maximumAdvance = n.getDurationValue() as any ; },
        "minimumLeadTime": n => { bookingSchedulingPolicy.minimumLeadTime = n.getDurationValue() as any ; },
        "@odata.type": n => { bookingSchedulingPolicy.odataType = n.getStringValue() as any ; },
        "sendConfirmationsToOwner": n => { bookingSchedulingPolicy.sendConfirmationsToOwner = n.getBooleanValue() as any ; },
        "timeSlotInterval": n => { bookingSchedulingPolicy.timeSlotInterval = n.getDurationValue() as any ; },
    }
}
