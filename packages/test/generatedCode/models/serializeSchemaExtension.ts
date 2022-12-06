import {SchemaExtension} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeExtensionSchemaProperty} from './serializeExtensionSchemaProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSchemaExtension(writer: SerializationWriter, schemaExtension: SchemaExtension | undefined = {}) : void {
        serializeEntity(writer, schemaExtension)
            writer.writeStringValue("description", schemaExtension.description);
            writer.writeStringValue("owner", schemaExtension.owner);
            writer.writeCollectionOfObjectValuesFromMethod("properties", schemaExtension.properties as any, serializeExtensionSchemaProperty);
            writer.writeStringValue("status", schemaExtension.status);
            writer.writeCollectionOfPrimitiveValues<string>("targetTypes", schemaExtension.targetTypes);
}
