import {ShiftItem} from './index';
import {serializeScheduleEntity} from './serializeScheduleEntity';
import {serializeShiftActivity} from './serializeShiftActivity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeShiftItem(writer: SerializationWriter, shiftItem: ShiftItem | undefined = {}) : void {
        serializeScheduleEntity(writer, shiftItem)
            writer.writeCollectionOfObjectValuesFromMethod("activities", shiftItem.activities as any, serializeShiftActivity);
            writer.writeStringValue("displayName", shiftItem.displayName);
            writer.writeStringValue("notes", shiftItem.notes);
}
