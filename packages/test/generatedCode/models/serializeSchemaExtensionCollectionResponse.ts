import {SchemaExtensionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSchemaExtension} from './serializeSchemaExtension';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSchemaExtensionCollectionResponse(writer: SerializationWriter, schemaExtensionCollectionResponse: SchemaExtensionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, schemaExtensionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", schemaExtensionCollectionResponse.value as any, serializeSchemaExtension);
}
