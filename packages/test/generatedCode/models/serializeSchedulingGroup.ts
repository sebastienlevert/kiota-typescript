import {SchedulingGroup} from './index';
import {serializeChangeTrackedEntity} from './serializeChangeTrackedEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSchedulingGroup(writer: SerializationWriter, schedulingGroup: SchedulingGroup | undefined = {}) : void {
        serializeChangeTrackedEntity(writer, schedulingGroup)
            writer.writeStringValue("displayName", schedulingGroup.displayName);
            writer.writeBooleanValue("isActive", schedulingGroup.isActive);
            writer.writeCollectionOfPrimitiveValues<string>("userIds", schedulingGroup.userIds);
}
