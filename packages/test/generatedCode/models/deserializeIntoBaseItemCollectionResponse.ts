import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoBaseItem} from './deserializeIntoBaseItem';
import {BaseItemCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBaseItemCollectionResponse(baseItemCollectionResponse: BaseItemCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(baseItemCollectionResponse),
        "value": n => { baseItemCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBaseItem) as any ; },
    }
}
