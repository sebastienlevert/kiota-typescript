import {ShiftAvailability} from './index';
import {serializePatternedRecurrence} from './serializePatternedRecurrence';
import {serializeTimeRange} from './serializeTimeRange';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeShiftAvailability(writer: SerializationWriter, shiftAvailability: ShiftAvailability | undefined = {}) : void {
            writer.writeObjectValueFromMethod("recurrence", shiftAvailability.recurrence as any, serializePatternedRecurrence);
            writer.writeCollectionOfObjectValuesFromMethod("timeSlots", shiftAvailability.timeSlots as any, serializeTimeRange);
            writer.writeStringValue("timeZone", shiftAvailability.timeZone);
}
