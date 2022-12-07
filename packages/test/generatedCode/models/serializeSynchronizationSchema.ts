import {SynchronizationSchema} from './index';
import {serializeDirectoryDefinition} from './serializeDirectoryDefinition';
import {serializeEntity} from './serializeEntity';
import {serializeSynchronizationRule} from './serializeSynchronizationRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSynchronizationSchema(writer: SerializationWriter, synchronizationSchema: SynchronizationSchema | undefined = {}) : void {
        serializeEntity(writer, synchronizationSchema)
            writer.writeCollectionOfObjectValuesFromMethod("directories", synchronizationSchema.directories as any, serializeDirectoryDefinition);
            writer.writeCollectionOfObjectValuesFromMethod("synchronizationRules", synchronizationSchema.synchronizationRules as any, serializeSynchronizationRule);
            writer.writeStringValue("version", synchronizationSchema.version);
}
