import {NotificationCollectionResponse} from './index';
import {serializeNotification} from './serializeNotification';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeNotificationCollectionResponse(writer: SerializationWriter, notificationCollectionResponse: NotificationCollectionResponse | undefined = {}) : void {
            writer.writeStringValue("@odata.nextLink", notificationCollectionResponse.odataNextLink);
            writer.writeCollectionOfObjectValuesFromMethod("value", notificationCollectionResponse.value as any, serializeNotification);
}
