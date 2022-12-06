import {EventMessageCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEventMessage} from './serializeEventMessage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEventMessageCollectionResponse(writer: SerializationWriter, eventMessageCollectionResponse: EventMessageCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, eventMessageCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", eventMessageCollectionResponse.value as any, serializeEventMessage);
}
