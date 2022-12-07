import {deserializeIntoChangeTrackedEntity} from './deserializeIntoChangeTrackedEntity';
import {deserializeIntoTimeOffItem} from './deserializeIntoTimeOffItem';
import {TimeOff} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeOff(timeOff: TimeOff | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoChangeTrackedEntity(timeOff),
        "draftTimeOff": n => { timeOff.draftTimeOff = n.getObject(deserializeIntoTimeOffItem) as any ; },
        "isStagedForDeletion": n => { timeOff.isStagedForDeletion = n.getBooleanValue() as any ; },
        "sharedTimeOff": n => { timeOff.sharedTimeOff = n.getObject(deserializeIntoTimeOffItem) as any ; },
        "userId": n => { timeOff.userId = n.getStringValue() as any ; },
    }
}
