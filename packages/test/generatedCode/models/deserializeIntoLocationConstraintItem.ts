import {deserializeIntoLocation} from './deserializeIntoLocation';
import {LocationConstraintItem} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLocationConstraintItem(locationConstraintItem: LocationConstraintItem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoLocation(locationConstraintItem),
        "resolveAvailability": n => { locationConstraintItem.resolveAvailability = n.getBooleanValue() as any ; },
    }
}
