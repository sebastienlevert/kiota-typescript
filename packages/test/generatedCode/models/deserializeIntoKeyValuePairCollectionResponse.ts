import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoKeyValuePair} from './deserializeIntoKeyValuePair';
import {KeyValuePairCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoKeyValuePairCollectionResponse(keyValuePairCollectionResponse: KeyValuePairCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(keyValuePairCollectionResponse),
        "value": n => { keyValuePairCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoKeyValuePair) as any ; },
    }
}
