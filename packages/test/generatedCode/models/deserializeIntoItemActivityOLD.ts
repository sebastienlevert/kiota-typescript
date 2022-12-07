import {deserializeIntoDriveItem} from './deserializeIntoDriveItem';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {deserializeIntoItemActionSet} from './deserializeIntoItemActionSet';
import {deserializeIntoItemActivityTimeSet} from './deserializeIntoItemActivityTimeSet';
import {deserializeIntoListItem} from './deserializeIntoListItem';
import {ItemActivityOLD} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoItemActivityOLD(itemActivityOLD: ItemActivityOLD | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(itemActivityOLD),
        "action": n => { itemActivityOLD.action = n.getObject(deserializeIntoItemActionSet) as any ; },
        "actor": n => { itemActivityOLD.actor = n.getObject(deserializeIntoIdentitySet) as any ; },
        "driveItem": n => { itemActivityOLD.driveItem = n.getObject(deserializeIntoDriveItem) as any ; },
        "listItem": n => { itemActivityOLD.listItem = n.getObject(deserializeIntoListItem) as any ; },
        "times": n => { itemActivityOLD.times = n.getObject(deserializeIntoItemActivityTimeSet) as any ; },
    }
}
