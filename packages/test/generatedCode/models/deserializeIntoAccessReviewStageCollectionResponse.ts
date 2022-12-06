import {deserializeIntoAccessReviewStage} from './deserializeIntoAccessReviewStage';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AccessReviewStageCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewStageCollectionResponse(accessReviewStageCollectionResponse: AccessReviewStageCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessReviewStageCollectionResponse),
        "value": n => { accessReviewStageCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewStage) as any ; },
    }
}
