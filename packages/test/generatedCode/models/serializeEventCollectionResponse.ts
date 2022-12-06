import {EventCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEvent} from './serializeEvent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEventCollectionResponse(writer: SerializationWriter, eventCollectionResponse: EventCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, eventCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", eventCollectionResponse.value as any, serializeEvent);
}
