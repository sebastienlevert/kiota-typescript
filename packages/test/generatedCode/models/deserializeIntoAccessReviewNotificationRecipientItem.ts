import {deserializeIntoAccessReviewNotificationRecipientScope} from './deserializeIntoAccessReviewNotificationRecipientScope';
import {AccessReviewNotificationRecipientItem} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewNotificationRecipientItem(accessReviewNotificationRecipientItem: AccessReviewNotificationRecipientItem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "notificationRecipientScope": n => { accessReviewNotificationRecipientItem.notificationRecipientScope = n.getObject(deserializeIntoAccessReviewNotificationRecipientScope) as any ; },
        "notificationTemplateType": n => { accessReviewNotificationRecipientItem.notificationTemplateType = n.getStringValue() as any ; },
    }
}
