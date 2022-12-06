import {deserializeIntoChangeTrackedEntity} from './deserializeIntoChangeTrackedEntity';
import {SchedulingGroup} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSchedulingGroup(schedulingGroup: SchedulingGroup | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoChangeTrackedEntity(schedulingGroup),
        "displayName": n => { schedulingGroup.displayName = n.getStringValue() as any ; },
        "isActive": n => { schedulingGroup.isActive = n.getBooleanValue() as any ; },
        "userIds": n => { schedulingGroup.userIds = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
