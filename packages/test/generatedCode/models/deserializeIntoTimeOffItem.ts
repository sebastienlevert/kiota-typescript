import {deserializeIntoScheduleEntity} from './deserializeIntoScheduleEntity';
import {TimeOffItem} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeOffItem(timeOffItem: TimeOffItem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoScheduleEntity(timeOffItem),
        "timeOffReasonId": n => { timeOffItem.timeOffReasonId = n.getStringValue() as any ; },
    }
}
