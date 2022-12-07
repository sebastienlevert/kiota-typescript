import {TimeOffReason} from './index';
import {serializeChangeTrackedEntity} from './serializeChangeTrackedEntity';
import {TimeOffReasonIconType} from './timeOffReasonIconType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTimeOffReason(writer: SerializationWriter, timeOffReason: TimeOffReason | undefined = {}) : void {
        serializeChangeTrackedEntity(writer, timeOffReason)
            writer.writeStringValue("displayName", timeOffReason.displayName);
            writer.writeEnumValue<TimeOffReasonIconType>("iconType", timeOffReason.iconType);
            writer.writeBooleanValue("isActive", timeOffReason.isActive);
}
