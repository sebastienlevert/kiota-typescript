import {EventMessageRequestCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEventMessageRequest} from './serializeEventMessageRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEventMessageRequestCollectionResponse(writer: SerializationWriter, eventMessageRequestCollectionResponse: EventMessageRequestCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, eventMessageRequestCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", eventMessageRequestCollectionResponse.value as any, serializeEventMessageRequest);
}
