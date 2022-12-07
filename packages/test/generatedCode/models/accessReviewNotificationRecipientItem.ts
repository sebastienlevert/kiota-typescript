import {AccessReviewNotificationRecipientScope} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewNotificationRecipientItem extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The notificationRecipientScope property */
    notificationRecipientScope?: AccessReviewNotificationRecipientScope;
    /** Indicates the type of access review email to be sent. Supported template type is CompletedAdditionalRecipients which sends review completion notifications to the recipients. */
    notificationTemplateType?: string;
}
