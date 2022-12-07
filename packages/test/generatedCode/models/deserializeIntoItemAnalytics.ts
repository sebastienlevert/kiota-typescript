import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoItemActivityStat} from './deserializeIntoItemActivityStat';
import {ItemAnalytics} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoItemAnalytics(itemAnalytics: ItemAnalytics | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(itemAnalytics),
        "allTime": n => { itemAnalytics.allTime = n.getObject(deserializeIntoItemActivityStat) as any ; },
        "itemActivityStats": n => { itemAnalytics.itemActivityStats = n.getCollectionOfObjectValuesFromMethod(deserializeIntoItemActivityStat) as any ; },
        "lastSevenDays": n => { itemAnalytics.lastSevenDays = n.getObject(deserializeIntoItemActivityStat) as any ; },
    }
}
