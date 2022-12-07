import {Shift} from './index';
import {serializeChangeTrackedEntity} from './serializeChangeTrackedEntity';
import {serializeShiftItem} from './serializeShiftItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeShift(writer: SerializationWriter, shift: Shift | undefined = {}) : void {
        serializeChangeTrackedEntity(writer, shift)
            writer.writeObjectValueFromMethod("draftShift", shift.draftShift as any, serializeShiftItem);
            writer.writeBooleanValue("isStagedForDeletion", shift.isStagedForDeletion);
            writer.writeStringValue("schedulingGroupId", shift.schedulingGroupId);
            writer.writeObjectValueFromMethod("sharedShift", shift.sharedShift as any, serializeShiftItem);
            writer.writeStringValue("userId", shift.userId);
}
