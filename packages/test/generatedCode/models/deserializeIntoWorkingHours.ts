import {DayOfWeek} from './dayOfWeek';
import {deserializeIntoTimeZoneBase} from './deserializeIntoTimeZoneBase';
import {WorkingHours} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkingHours(workingHours: WorkingHours | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "daysOfWeek": n => { workingHours.daysOfWeek = n.getEnumValues<DayOfWeek>(DayOfWeek) as any ; },
        "endTime": n => { workingHours.endTime = n.getTimeOnlyValue() as any ; },
        "startTime": n => { workingHours.startTime = n.getTimeOnlyValue() as any ; },
        "timeZone": n => { workingHours.timeZone = n.getObject(deserializeIntoTimeZoneBase) as any ; },
    }
}
