import {SynchronizationTemplate} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeMetadataEntry} from './serializeMetadataEntry';
import {serializeSynchronizationSchema} from './serializeSynchronizationSchema';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSynchronizationTemplate(writer: SerializationWriter, synchronizationTemplate: SynchronizationTemplate | undefined = {}) : void {
        serializeEntity(writer, synchronizationTemplate)
            writer.writeStringValue("applicationId", synchronizationTemplate.applicationId);
            writer.writeBooleanValue("default", synchronizationTemplate.default_escaped);
            writer.writeStringValue("description", synchronizationTemplate.description);
            writer.writeBooleanValue("discoverable", synchronizationTemplate.discoverable);
            writer.writeStringValue("factoryTag", synchronizationTemplate.factoryTag);
            writer.writeCollectionOfObjectValuesFromMethod("metadata", synchronizationTemplate.metadata as any, serializeMetadataEntry);
            writer.writeObjectValueFromMethod("schema", synchronizationTemplate.schema as any, serializeSynchronizationSchema);
}
