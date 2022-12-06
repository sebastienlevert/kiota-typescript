import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoStore} from './deserializeIntoStore';
import {StoreCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoStoreCollectionResponse(storeCollectionResponse: StoreCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(storeCollectionResponse),
        "value": n => { storeCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoStore) as any ; },
    }
}
