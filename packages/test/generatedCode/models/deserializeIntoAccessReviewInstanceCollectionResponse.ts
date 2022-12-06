import {deserializeIntoAccessReviewInstance} from './deserializeIntoAccessReviewInstance';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AccessReviewInstanceCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewInstanceCollectionResponse(accessReviewInstanceCollectionResponse: AccessReviewInstanceCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessReviewInstanceCollectionResponse),
        "value": n => { accessReviewInstanceCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewInstance) as any ; },
    }
}
