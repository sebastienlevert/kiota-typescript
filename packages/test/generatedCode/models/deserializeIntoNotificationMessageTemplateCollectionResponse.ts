import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoNotificationMessageTemplate} from './deserializeIntoNotificationMessageTemplate';
import {NotificationMessageTemplateCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNotificationMessageTemplateCollectionResponse(notificationMessageTemplateCollectionResponse: NotificationMessageTemplateCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(notificationMessageTemplateCollectionResponse),
        "value": n => { notificationMessageTemplateCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoNotificationMessageTemplate) as any ; },
    }
}
