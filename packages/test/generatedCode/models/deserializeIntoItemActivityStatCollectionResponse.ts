import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoItemActivityStat} from './deserializeIntoItemActivityStat';
import {ItemActivityStatCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoItemActivityStatCollectionResponse(itemActivityStatCollectionResponse: ItemActivityStatCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(itemActivityStatCollectionResponse),
        "value": n => { itemActivityStatCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoItemActivityStat) as any ; },
    }
}
