import {DayOfWeek} from './dayOfWeek';
import {WorkingHours} from './index';
import {serializeTimeZoneBase} from './serializeTimeZoneBase';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export function serializeWorkingHours(writer: SerializationWriter, workingHours: WorkingHours | undefined = {}) : void {
           // writer.writeEnumValue<DayOfWeek>("daysOfWeek", workingHours.daysOfWeek);
            writer.writeTimeOnlyValue("endTime", workingHours.endTime);
            writer.writeTimeOnlyValue("startTime", workingHours.startTime);
            writer.writeObjectValueFromMethod("timeZone", workingHours.timeZone as any, serializeTimeZoneBase);
}
