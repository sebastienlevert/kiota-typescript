import {LocalizedNotificationMessageCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeLocalizedNotificationMessage} from './serializeLocalizedNotificationMessage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLocalizedNotificationMessageCollectionResponse(writer: SerializationWriter, localizedNotificationMessageCollectionResponse: LocalizedNotificationMessageCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, localizedNotificationMessageCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", localizedNotificationMessageCollectionResponse.value as any, serializeLocalizedNotificationMessage);
}
