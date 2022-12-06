import {NotificationMessageTemplateCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeNotificationMessageTemplate} from './serializeNotificationMessageTemplate';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeNotificationMessageTemplateCollectionResponse(writer: SerializationWriter, notificationMessageTemplateCollectionResponse: NotificationMessageTemplateCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, notificationMessageTemplateCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", notificationMessageTemplateCollectionResponse.value as any, serializeNotificationMessageTemplate);
}
