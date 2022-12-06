import {deserializeIntoAccessReviewApplyAction} from './deserializeIntoAccessReviewApplyAction';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AccessReviewApplyActionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewApplyActionCollectionResponse(accessReviewApplyActionCollectionResponse: AccessReviewApplyActionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessReviewApplyActionCollectionResponse),
        "value": n => { accessReviewApplyActionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewApplyAction) as any ; },
    }
}
