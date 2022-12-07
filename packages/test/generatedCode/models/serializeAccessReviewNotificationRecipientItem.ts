import {AccessReviewNotificationRecipientItem} from './index';
import {serializeAccessReviewNotificationRecipientScope} from './serializeAccessReviewNotificationRecipientScope';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewNotificationRecipientItem(writer: SerializationWriter, accessReviewNotificationRecipientItem: AccessReviewNotificationRecipientItem | undefined = {}) : void {
            writer.writeObjectValueFromMethod("notificationRecipientScope", accessReviewNotificationRecipientItem.notificationRecipientScope as any, serializeAccessReviewNotificationRecipientScope);
            writer.writeStringValue("notificationTemplateType", accessReviewNotificationRecipientItem.notificationTemplateType);
}
