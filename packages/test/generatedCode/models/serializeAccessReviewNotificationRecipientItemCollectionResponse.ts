import {AccessReviewNotificationRecipientItemCollectionResponse} from './index';
import {serializeAccessReviewNotificationRecipientItem} from './serializeAccessReviewNotificationRecipientItem';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewNotificationRecipientItemCollectionResponse(writer: SerializationWriter, accessReviewNotificationRecipientItemCollectionResponse: AccessReviewNotificationRecipientItemCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessReviewNotificationRecipientItemCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", accessReviewNotificationRecipientItemCollectionResponse.value as any, serializeAccessReviewNotificationRecipientItem);
}
