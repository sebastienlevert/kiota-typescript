import {deserializeIntoChangeTrackedEntity} from './deserializeIntoChangeTrackedEntity';
import {deserializeIntoShiftItem} from './deserializeIntoShiftItem';
import {Shift} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoShift(shift: Shift | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoChangeTrackedEntity(shift),
        "draftShift": n => { shift.draftShift = n.getObject(deserializeIntoShiftItem) as any ; },
        "isStagedForDeletion": n => { shift.isStagedForDeletion = n.getBooleanValue() as any ; },
        "schedulingGroupId": n => { shift.schedulingGroupId = n.getStringValue() as any ; },
        "sharedShift": n => { shift.sharedShift = n.getObject(deserializeIntoShiftItem) as any ; },
        "userId": n => { shift.userId = n.getStringValue() as any ; },
    }
}
