import {deserializeIntoAccessReviewInstanceDecisionItem} from './deserializeIntoAccessReviewInstanceDecisionItem';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AccessReviewInstanceDecisionItemCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewInstanceDecisionItemCollectionResponse(accessReviewInstanceDecisionItemCollectionResponse: AccessReviewInstanceDecisionItemCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessReviewInstanceDecisionItemCollectionResponse),
        "value": n => { accessReviewInstanceDecisionItemCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewInstanceDecisionItem) as any ; },
    }
}
