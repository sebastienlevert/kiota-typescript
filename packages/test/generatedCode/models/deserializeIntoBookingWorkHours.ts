import {DayOfWeek} from './dayOfWeek';
import {deserializeIntoBookingWorkTimeSlot} from './deserializeIntoBookingWorkTimeSlot';
import {BookingWorkHours} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingWorkHours(bookingWorkHours: BookingWorkHours | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "day": n => { bookingWorkHours.day = n.getEnumValue<DayOfWeek>(DayOfWeek) as any ; },
        "@odata.type": n => { bookingWorkHours.odataType = n.getStringValue() as any ; },
        "timeSlots": n => { bookingWorkHours.timeSlots = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBookingWorkTimeSlot) as any ; },
    }
}
