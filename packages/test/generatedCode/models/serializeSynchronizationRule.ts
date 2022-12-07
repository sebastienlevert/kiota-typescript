import {SynchronizationRule} from './index';
import {serializeObjectMapping} from './serializeObjectMapping';
import {serializeStringKeyStringValuePair} from './serializeStringKeyStringValuePair';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSynchronizationRule(writer: SerializationWriter, synchronizationRule: SynchronizationRule | undefined = {}) : void {
            writer.writeBooleanValue("editable", synchronizationRule.editable);
            writer.writeStringValue("id", synchronizationRule.id);
            writer.writeCollectionOfObjectValuesFromMethod("metadata", synchronizationRule.metadata as any, serializeStringKeyStringValuePair);
            writer.writeStringValue("name", synchronizationRule.name);
            writer.writeCollectionOfObjectValuesFromMethod("objectMappings", synchronizationRule.objectMappings as any, serializeObjectMapping);
            writer.writeNumberValue("priority", synchronizationRule.priority);
            writer.writeStringValue("sourceDirectoryName", synchronizationRule.sourceDirectoryName);
            writer.writeStringValue("targetDirectoryName", synchronizationRule.targetDirectoryName);
}
