import {TimeOff} from './index';
import {serializeChangeTrackedEntity} from './serializeChangeTrackedEntity';
import {serializeTimeOffItem} from './serializeTimeOffItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTimeOff(writer: SerializationWriter, timeOff: TimeOff | undefined = {}) : void {
        serializeChangeTrackedEntity(writer, timeOff)
            writer.writeObjectValueFromMethod("draftTimeOff", timeOff.draftTimeOff as any, serializeTimeOffItem);
            writer.writeBooleanValue("isStagedForDeletion", timeOff.isStagedForDeletion);
            writer.writeObjectValueFromMethod("sharedTimeOff", timeOff.sharedTimeOff as any, serializeTimeOffItem);
            writer.writeStringValue("userId", timeOff.userId);
}
