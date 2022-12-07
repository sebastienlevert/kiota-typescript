import {AttributeType} from './attributeType';
import {AttributeDefinition} from './index';
import {Mutability} from './mutability';
import {serializeMetadataEntry} from './serializeMetadataEntry';
import {serializeReferencedObject} from './serializeReferencedObject';
import {serializeStringKeyStringValuePair} from './serializeStringKeyStringValuePair';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttributeDefinition(writer: SerializationWriter, attributeDefinition: AttributeDefinition | undefined = {}) : void {
            writer.writeBooleanValue("anchor", attributeDefinition.anchor);
            writer.writeCollectionOfObjectValuesFromMethod("apiExpressions", attributeDefinition.apiExpressions as any, serializeStringKeyStringValuePair);
            writer.writeBooleanValue("caseExact", attributeDefinition.caseExact);
            writer.writeStringValue("defaultValue", attributeDefinition.defaultValue);
            writer.writeBooleanValue("flowNullValues", attributeDefinition.flowNullValues);
            writer.writeCollectionOfObjectValuesFromMethod("metadata", attributeDefinition.metadata as any, serializeMetadataEntry);
            writer.writeBooleanValue("multivalued", attributeDefinition.multivalued);
            writer.writeEnumValue<Mutability>("mutability", attributeDefinition.mutability);
            writer.writeStringValue("name", attributeDefinition.name);
            writer.writeCollectionOfObjectValuesFromMethod("referencedObjects", attributeDefinition.referencedObjects as any, serializeReferencedObject);
            writer.writeBooleanValue("required", attributeDefinition.required);
            writer.writeEnumValue<AttributeType>("type", attributeDefinition.type);
}
