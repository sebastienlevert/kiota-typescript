import {EventMessageResponseCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEventMessageResponse} from './serializeEventMessageResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEventMessageResponseCollectionResponse(writer: SerializationWriter, eventMessageResponseCollectionResponse: EventMessageResponseCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, eventMessageResponseCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", eventMessageResponseCollectionResponse.value as any, serializeEventMessageResponse);
}
