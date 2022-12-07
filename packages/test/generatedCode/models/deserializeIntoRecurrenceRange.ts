import {RecurrenceRange} from './index';
import {RecurrenceRangeType} from './recurrenceRangeType';
import {AdditionalDataHolder, DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRecurrenceRange(recurrenceRange: RecurrenceRange | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "endDate": n => { recurrenceRange.endDate = n.getDateOnlyValue() as any ; },
        "numberOfOccurrences": n => { recurrenceRange.numberOfOccurrences = n.getNumberValue() as any ; },
        "recurrenceTimeZone": n => { recurrenceRange.recurrenceTimeZone = n.getStringValue() as any ; },
        "startDate": n => { recurrenceRange.startDate = n.getDateOnlyValue() as any ; },
        "type": n => { recurrenceRange.type = n.getEnumValue<RecurrenceRangeType>(RecurrenceRangeType) as any ; },
    }
}
