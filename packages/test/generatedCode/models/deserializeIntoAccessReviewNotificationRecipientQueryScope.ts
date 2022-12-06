import {deserializeIntoAccessReviewNotificationRecipientScope} from './deserializeIntoAccessReviewNotificationRecipientScope';
import {AccessReviewNotificationRecipientQueryScope} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewNotificationRecipientQueryScope(accessReviewNotificationRecipientQueryScope: AccessReviewNotificationRecipientQueryScope | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessReviewNotificationRecipientScope(accessReviewNotificationRecipientQueryScope),
        "query": n => { accessReviewNotificationRecipientQueryScope.query = n.getStringValue() as any ; },
        "queryRoot": n => { accessReviewNotificationRecipientQueryScope.queryRoot = n.getStringValue() as any ; },
        "queryType": n => { accessReviewNotificationRecipientQueryScope.queryType = n.getStringValue() as any ; },
    }
}
