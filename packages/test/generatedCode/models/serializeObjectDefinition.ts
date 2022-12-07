import {ObjectDefinition} from './index';
import {serializeAttributeDefinition} from './serializeAttributeDefinition';
import {serializeMetadataEntry} from './serializeMetadataEntry';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeObjectDefinition(writer: SerializationWriter, objectDefinition: ObjectDefinition | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("attributes", objectDefinition.attributes as any, serializeAttributeDefinition);
            writer.writeCollectionOfObjectValuesFromMethod("metadata", objectDefinition.metadata as any, serializeMetadataEntry);
            writer.writeStringValue("name", objectDefinition.name);
            writer.writeCollectionOfPrimitiveValues<string>("supportedApis", objectDefinition.supportedApis);
}
