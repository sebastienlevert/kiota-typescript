import {ObjectMapping} from './index';
import {ObjectFlowTypes} from './objectFlowTypes';
import {serializeAttributeMapping} from './serializeAttributeMapping';
import {serializeFilter} from './serializeFilter';
import {serializeMetadataEntry} from './serializeMetadataEntry';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeObjectMapping(writer: SerializationWriter, objectMapping: ObjectMapping | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("attributeMappings", objectMapping.attributeMappings as any, serializeAttributeMapping);
            writer.writeBooleanValue("enabled", objectMapping.enabled);
            writer.writeEnumValue<ObjectFlowTypes>("flowTypes", objectMapping.flowTypes);
            writer.writeCollectionOfObjectValuesFromMethod("metadata", objectMapping.metadata as any, serializeMetadataEntry);
            writer.writeStringValue("name", objectMapping.name);
            writer.writeObjectValueFromMethod("scope", objectMapping.scope as any, serializeFilter);
            writer.writeStringValue("sourceObjectName", objectMapping.sourceObjectName);
            writer.writeStringValue("targetObjectName", objectMapping.targetObjectName);
}
