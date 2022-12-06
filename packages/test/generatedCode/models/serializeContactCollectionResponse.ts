import {ContactCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeContact} from './serializeContact';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContactCollectionResponse(writer: SerializationWriter, contactCollectionResponse: ContactCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, contactCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", contactCollectionResponse.value as any, serializeContact);
}
