import {ExtensionSchemaPropertyCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeExtensionSchemaProperty} from './serializeExtensionSchemaProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExtensionSchemaPropertyCollectionResponse(writer: SerializationWriter, extensionSchemaPropertyCollectionResponse: ExtensionSchemaPropertyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, extensionSchemaPropertyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", extensionSchemaPropertyCollectionResponse.value as any, serializeExtensionSchemaProperty);
}
