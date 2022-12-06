import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEdiscoveryReviewSet} from './deserializeIntoEdiscoveryReviewSet';
import {EdiscoveryReviewSetCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryReviewSetCollectionResponse(ediscoveryReviewSetCollectionResponse: EdiscoveryReviewSetCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(ediscoveryReviewSetCollectionResponse),
        "value": n => { ediscoveryReviewSetCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEdiscoveryReviewSet) as any ; },
    }
}
