import {ShiftPreferences} from './index';
import {serializeChangeTrackedEntity} from './serializeChangeTrackedEntity';
import {serializeShiftAvailability} from './serializeShiftAvailability';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeShiftPreferences(writer: SerializationWriter, shiftPreferences: ShiftPreferences | undefined = {}) : void {
        serializeChangeTrackedEntity(writer, shiftPreferences)
            writer.writeCollectionOfObjectValuesFromMethod("availability", shiftPreferences.availability as any, serializeShiftAvailability);
}
