import {CommsNotificationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeCommsNotification} from './serializeCommsNotification';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCommsNotificationCollectionResponse(writer: SerializationWriter, commsNotificationCollectionResponse: CommsNotificationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, commsNotificationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", commsNotificationCollectionResponse.value as any, serializeCommsNotification);
}
