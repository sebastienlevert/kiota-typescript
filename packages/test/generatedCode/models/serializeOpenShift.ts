import {OpenShift} from './index';
import {serializeChangeTrackedEntity} from './serializeChangeTrackedEntity';
import {serializeOpenShiftItem} from './serializeOpenShiftItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOpenShift(writer: SerializationWriter, openShift: OpenShift | undefined = {}) : void {
        serializeChangeTrackedEntity(writer, openShift)
            writer.writeObjectValueFromMethod("draftOpenShift", openShift.draftOpenShift as any, serializeOpenShiftItem);
            writer.writeBooleanValue("isStagedForDeletion", openShift.isStagedForDeletion);
            writer.writeStringValue("schedulingGroupId", openShift.schedulingGroupId);
            writer.writeObjectValueFromMethod("sharedOpenShift", openShift.sharedOpenShift as any, serializeOpenShiftItem);
}
