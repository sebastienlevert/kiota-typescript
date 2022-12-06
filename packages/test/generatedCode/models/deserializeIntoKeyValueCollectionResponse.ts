import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoKeyValue} from './deserializeIntoKeyValue';
import {KeyValueCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoKeyValueCollectionResponse(keyValueCollectionResponse: KeyValueCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(keyValueCollectionResponse),
        "value": n => { keyValueCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoKeyValue) as any ; },
    }
}
