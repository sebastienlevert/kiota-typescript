import {deserializeIntoAccessReviewHistoryInstance} from './deserializeIntoAccessReviewHistoryInstance';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AccessReviewHistoryInstanceCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewHistoryInstanceCollectionResponse(accessReviewHistoryInstanceCollectionResponse: AccessReviewHistoryInstanceCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessReviewHistoryInstanceCollectionResponse),
        "value": n => { accessReviewHistoryInstanceCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewHistoryInstance) as any ; },
    }
}
