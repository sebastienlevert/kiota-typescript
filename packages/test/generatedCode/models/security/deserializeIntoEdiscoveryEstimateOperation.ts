import {deserializeIntoCaseOperation} from './deserializeIntoCaseOperation';
import {deserializeIntoEdiscoverySearch} from './deserializeIntoEdiscoverySearch';
import {EdiscoveryEstimateOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryEstimateOperation(ediscoveryEstimateOperation: EdiscoveryEstimateOperation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCaseOperation(ediscoveryEstimateOperation),
        "indexedItemCount": n => { ediscoveryEstimateOperation.indexedItemCount = n.getNumberValue() as any ; },
        "indexedItemsSize": n => { ediscoveryEstimateOperation.indexedItemsSize = n.getNumberValue() as any ; },
        "mailboxCount": n => { ediscoveryEstimateOperation.mailboxCount = n.getNumberValue() as any ; },
        "search": n => { ediscoveryEstimateOperation.search = n.getObject(deserializeIntoEdiscoverySearch) as any ; },
        "siteCount": n => { ediscoveryEstimateOperation.siteCount = n.getNumberValue() as any ; },
        "unindexedItemCount": n => { ediscoveryEstimateOperation.unindexedItemCount = n.getNumberValue() as any ; },
        "unindexedItemsSize": n => { ediscoveryEstimateOperation.unindexedItemsSize = n.getNumberValue() as any ; },
    }
}
