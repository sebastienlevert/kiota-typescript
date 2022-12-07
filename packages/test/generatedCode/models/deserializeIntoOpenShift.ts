import {deserializeIntoChangeTrackedEntity} from './deserializeIntoChangeTrackedEntity';
import {deserializeIntoOpenShiftItem} from './deserializeIntoOpenShiftItem';
import {OpenShift} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOpenShift(openShift: OpenShift | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoChangeTrackedEntity(openShift),
        "draftOpenShift": n => { openShift.draftOpenShift = n.getObject(deserializeIntoOpenShiftItem) as any ; },
        "isStagedForDeletion": n => { openShift.isStagedForDeletion = n.getBooleanValue() as any ; },
        "schedulingGroupId": n => { openShift.schedulingGroupId = n.getStringValue() as any ; },
        "sharedOpenShift": n => { openShift.sharedOpenShift = n.getObject(deserializeIntoOpenShiftItem) as any ; },
    }
}
