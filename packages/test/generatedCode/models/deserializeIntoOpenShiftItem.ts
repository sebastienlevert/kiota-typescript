import {deserializeIntoShiftItem} from './deserializeIntoShiftItem';
import {OpenShiftItem} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOpenShiftItem(openShiftItem: OpenShiftItem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoShiftItem(openShiftItem),
        "openSlotCount": n => { openShiftItem.openSlotCount = n.getNumberValue() as any ; },
    }
}
