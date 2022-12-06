import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEdiscoveryReviewTag} from './deserializeIntoEdiscoveryReviewTag';
import {EdiscoveryReviewTagCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryReviewTagCollectionResponse(ediscoveryReviewTagCollectionResponse: EdiscoveryReviewTagCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(ediscoveryReviewTagCollectionResponse),
        "value": n => { ediscoveryReviewTagCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEdiscoveryReviewTag) as any ; },
    }
}
