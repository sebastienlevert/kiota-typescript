import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoItemActivity} from './deserializeIntoItemActivity';
import {ItemActivityCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoItemActivityCollectionResponse(itemActivityCollectionResponse: ItemActivityCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(itemActivityCollectionResponse),
        "value": n => { itemActivityCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoItemActivity) as any ; },
    }
}
