import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoIncompleteData} from './deserializeIntoIncompleteData';
import {deserializeIntoItemActionStat} from './deserializeIntoItemActionStat';
import {deserializeIntoItemActivity} from './deserializeIntoItemActivity';
import {ItemActivityStat} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoItemActivityStat(itemActivityStat: ItemActivityStat | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(itemActivityStat),
        "access": n => { itemActivityStat.access = n.getObject(deserializeIntoItemActionStat) as any ; },
        "activities": n => { itemActivityStat.activities = n.getCollectionOfObjectValuesFromMethod(deserializeIntoItemActivity) as any ; },
        "create": n => { itemActivityStat.create = n.getObject(deserializeIntoItemActionStat) as any ; },
        "delete": n => { itemActivityStat.delete = n.getObject(deserializeIntoItemActionStat) as any ; },
        "edit": n => { itemActivityStat.edit = n.getObject(deserializeIntoItemActionStat) as any ; },
        "endDateTime": n => { itemActivityStat.endDateTime = n.getDateValue() as any ; },
        "incompleteData": n => { itemActivityStat.incompleteData = n.getObject(deserializeIntoIncompleteData) as any ; },
        "isTrending": n => { itemActivityStat.isTrending = n.getBooleanValue() as any ; },
        "move": n => { itemActivityStat.move = n.getObject(deserializeIntoItemActionStat) as any ; },
        "startDateTime": n => { itemActivityStat.startDateTime = n.getDateValue() as any ; },
    }
}
