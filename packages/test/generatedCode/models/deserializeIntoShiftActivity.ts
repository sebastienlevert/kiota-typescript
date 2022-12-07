import {ShiftActivity} from './index';
import {ScheduleEntityTheme} from './scheduleEntityTheme';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoShiftActivity(shiftActivity: ShiftActivity | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { shiftActivity.code = n.getStringValue() as any ; },
        "displayName": n => { shiftActivity.displayName = n.getStringValue() as any ; },
        "endDateTime": n => { shiftActivity.endDateTime = n.getDateValue() as any ; },
        "isPaid": n => { shiftActivity.isPaid = n.getBooleanValue() as any ; },
        "startDateTime": n => { shiftActivity.startDateTime = n.getDateValue() as any ; },
        "theme": n => { shiftActivity.theme = n.getEnumValue<ScheduleEntityTheme>(ScheduleEntityTheme) as any ; },
    }
}
