import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEdiscoveryTagOperation} from './deserializeIntoEdiscoveryTagOperation';
import {EdiscoveryTagOperationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryTagOperationCollectionResponse(ediscoveryTagOperationCollectionResponse: EdiscoveryTagOperationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(ediscoveryTagOperationCollectionResponse),
        "value": n => { ediscoveryTagOperationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEdiscoveryTagOperation) as any ; },
    }
}
