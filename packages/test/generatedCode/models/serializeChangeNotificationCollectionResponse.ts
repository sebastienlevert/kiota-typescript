import {ChangeNotificationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeChangeNotification} from './serializeChangeNotification';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChangeNotificationCollectionResponse(writer: SerializationWriter, changeNotificationCollectionResponse: ChangeNotificationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, changeNotificationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", changeNotificationCollectionResponse.value as any, serializeChangeNotification);
}
