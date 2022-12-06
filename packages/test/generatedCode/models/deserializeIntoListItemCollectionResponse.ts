import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoListItem} from './deserializeIntoListItem';
import {ListItemCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoListItemCollectionResponse(listItemCollectionResponse: ListItemCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(listItemCollectionResponse),
        "value": n => { listItemCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoListItem) as any ; },
    }
}
