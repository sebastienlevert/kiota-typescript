import {deserializeIntoAccessReviewNotificationRecipientItem} from './deserializeIntoAccessReviewNotificationRecipientItem';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AccessReviewNotificationRecipientItemCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewNotificationRecipientItemCollectionResponse(accessReviewNotificationRecipientItemCollectionResponse: AccessReviewNotificationRecipientItemCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessReviewNotificationRecipientItemCollectionResponse),
        "value": n => { accessReviewNotificationRecipientItemCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewNotificationRecipientItem) as any ; },
    }
}
