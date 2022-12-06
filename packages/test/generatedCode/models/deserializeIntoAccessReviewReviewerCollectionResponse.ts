import {deserializeIntoAccessReviewReviewer} from './deserializeIntoAccessReviewReviewer';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AccessReviewReviewerCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewReviewerCollectionResponse(accessReviewReviewerCollectionResponse: AccessReviewReviewerCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessReviewReviewerCollectionResponse),
        "value": n => { accessReviewReviewerCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewReviewer) as any ; },
    }
}
