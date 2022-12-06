import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEdiscoveryIndexOperation} from './deserializeIntoEdiscoveryIndexOperation';
import {EdiscoveryIndexOperationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryIndexOperationCollectionResponse(ediscoveryIndexOperationCollectionResponse: EdiscoveryIndexOperationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(ediscoveryIndexOperationCollectionResponse),
        "value": n => { ediscoveryIndexOperationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEdiscoveryIndexOperation) as any ; },
    }
}
