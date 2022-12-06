import {deserializeIntoAccessReviewReviewerScope} from './deserializeIntoAccessReviewReviewerScope';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AccessReviewReviewerScopeCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewReviewerScopeCollectionResponse(accessReviewReviewerScopeCollectionResponse: AccessReviewReviewerScopeCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessReviewReviewerScopeCollectionResponse),
        "value": n => { accessReviewReviewerScopeCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewReviewerScope) as any ; },
    }
}
