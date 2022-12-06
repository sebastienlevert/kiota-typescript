import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEdiscoveryReviewSetQuery} from './deserializeIntoEdiscoveryReviewSetQuery';
import {EdiscoveryReviewSetQueryCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryReviewSetQueryCollectionResponse(ediscoveryReviewSetQueryCollectionResponse: EdiscoveryReviewSetQueryCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(ediscoveryReviewSetQueryCollectionResponse),
        "value": n => { ediscoveryReviewSetQueryCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEdiscoveryReviewSetQuery) as any ; },
    }
}
