import {deserializeIntoNotification} from './deserializeIntoNotification';
import {NotificationCollectionResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNotificationCollectionResponse(notificationCollectionResponse: NotificationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.nextLink": n => { notificationCollectionResponse.odataNextLink = n.getStringValue() as any ; },
        "value": n => { notificationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoNotification) as any ; },
    }
}
