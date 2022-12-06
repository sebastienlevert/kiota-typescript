import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEdiscoveryHoldOperation} from './deserializeIntoEdiscoveryHoldOperation';
import {EdiscoveryHoldOperationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryHoldOperationCollectionResponse(ediscoveryHoldOperationCollectionResponse: EdiscoveryHoldOperationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(ediscoveryHoldOperationCollectionResponse),
        "value": n => { ediscoveryHoldOperationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEdiscoveryHoldOperation) as any ; },
    }
}
