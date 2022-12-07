import {deserializeIntoPatternedRecurrence} from './deserializeIntoPatternedRecurrence';
import {deserializeIntoTimeRange} from './deserializeIntoTimeRange';
import {ShiftAvailability} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoShiftAvailability(shiftAvailability: ShiftAvailability | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "recurrence": n => { shiftAvailability.recurrence = n.getObject(deserializeIntoPatternedRecurrence) as any ; },
        "timeSlots": n => { shiftAvailability.timeSlots = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTimeRange) as any ; },
        "timeZone": n => { shiftAvailability.timeZone = n.getStringValue() as any ; },
    }
}
