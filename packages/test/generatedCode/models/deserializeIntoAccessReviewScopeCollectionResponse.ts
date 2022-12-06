import {deserializeIntoAccessReviewScope} from './deserializeIntoAccessReviewScope';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AccessReviewScopeCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewScopeCollectionResponse(accessReviewScopeCollectionResponse: AccessReviewScopeCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessReviewScopeCollectionResponse),
        "value": n => { accessReviewScopeCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewScope) as any ; },
    }
}
