import {deserializeIntoDateTimeTimeZone} from './deserializeIntoDateTimeTimeZone';
import {TimeSlot} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeSlot(timeSlot: TimeSlot | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "end": n => { timeSlot.end = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
        "start": n => { timeSlot.start = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
    }
}
