import {deserializeIntoAccessAction} from './deserializeIntoAccessAction';
import {deserializeIntoDriveItem} from './deserializeIntoDriveItem';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {ItemActivity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoItemActivity(itemActivity: ItemActivity | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(itemActivity),
        "access": n => { itemActivity.access = n.getObject(deserializeIntoAccessAction) as any ; },
        "activityDateTime": n => { itemActivity.activityDateTime = n.getDateValue() as any ; },
        "actor": n => { itemActivity.actor = n.getObject(deserializeIntoIdentitySet) as any ; },
        "driveItem": n => { itemActivity.driveItem = n.getObject(deserializeIntoDriveItem) as any ; },
    }
}
