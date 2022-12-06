import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEdiscoveryAddToReviewSetOperation} from './deserializeIntoEdiscoveryAddToReviewSetOperation';
import {EdiscoveryAddToReviewSetOperationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryAddToReviewSetOperationCollectionResponse(ediscoveryAddToReviewSetOperationCollectionResponse: EdiscoveryAddToReviewSetOperationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(ediscoveryAddToReviewSetOperationCollectionResponse),
        "value": n => { ediscoveryAddToReviewSetOperationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEdiscoveryAddToReviewSetOperation) as any ; },
    }
}
