import {AccessReviewNotificationRecipientQueryScope} from './index';
import {serializeAccessReviewNotificationRecipientScope} from './serializeAccessReviewNotificationRecipientScope';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewNotificationRecipientQueryScope(writer: SerializationWriter, accessReviewNotificationRecipientQueryScope: AccessReviewNotificationRecipientQueryScope | undefined = {}) : void {
        serializeAccessReviewNotificationRecipientScope(writer, accessReviewNotificationRecipientQueryScope)
            writer.writeStringValue("query", accessReviewNotificationRecipientQueryScope.query);
            writer.writeStringValue("queryRoot", accessReviewNotificationRecipientQueryScope.queryRoot);
            writer.writeStringValue("queryType", accessReviewNotificationRecipientQueryScope.queryType);
}
