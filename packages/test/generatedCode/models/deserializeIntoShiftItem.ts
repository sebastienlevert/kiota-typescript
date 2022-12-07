import {deserializeIntoScheduleEntity} from './deserializeIntoScheduleEntity';
import {deserializeIntoShiftActivity} from './deserializeIntoShiftActivity';
import {ShiftItem} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoShiftItem(shiftItem: ShiftItem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoScheduleEntity(shiftItem),
        "activities": n => { shiftItem.activities = n.getCollectionOfObjectValuesFromMethod(deserializeIntoShiftActivity) as any ; },
        "displayName": n => { shiftItem.displayName = n.getStringValue() as any ; },
        "notes": n => { shiftItem.notes = n.getStringValue() as any ; },
    }
}
