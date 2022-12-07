import {DayOfWeek} from './dayOfWeek';
import {RecurrencePattern} from './index';
import {RecurrencePatternType} from './recurrencePatternType';
import {WeekIndex} from './weekIndex';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRecurrencePattern(recurrencePattern: RecurrencePattern | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "dayOfMonth": n => { recurrencePattern.dayOfMonth = n.getNumberValue() as any ; },
        "daysOfWeek": n => { recurrencePattern.daysOfWeek = n.getEnumValues<DayOfWeek>(DayOfWeek) as any ; },
        "firstDayOfWeek": n => { recurrencePattern.firstDayOfWeek = n.getEnumValue<DayOfWeek>(DayOfWeek) as any ; },
        "index": n => { recurrencePattern.index = n.getEnumValue<WeekIndex>(WeekIndex) as any ; },
        "interval": n => { recurrencePattern.interval = n.getNumberValue() as any ; },
        "month": n => { recurrencePattern.month = n.getNumberValue() as any ; },
        "type": n => { recurrencePattern.type = n.getEnumValue<RecurrencePatternType>(RecurrencePatternType) as any ; },
    }
}
