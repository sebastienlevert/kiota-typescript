import {AccessReviewNotificationRecipientScope} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewNotificationRecipientScope(accessReviewNotificationRecipientScope: AccessReviewNotificationRecipientScope | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { accessReviewNotificationRecipientScope.odataType = n.getStringValue() as any ; },
    }
}
