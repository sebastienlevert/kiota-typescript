import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoListItemVersion} from './deserializeIntoListItemVersion';
import {ListItemVersionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoListItemVersionCollectionResponse(listItemVersionCollectionResponse: ListItemVersionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(listItemVersionCollectionResponse),
        "value": n => { listItemVersionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoListItemVersion) as any ; },
    }
}
