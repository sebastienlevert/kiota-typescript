import {SynchronizationTaskExecution} from './index';
import {serializeSynchronizationError} from './serializeSynchronizationError';
import {SynchronizationTaskExecutionResult} from './synchronizationTaskExecutionResult';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSynchronizationTaskExecution(writer: SerializationWriter, synchronizationTaskExecution: SynchronizationTaskExecution | undefined = {}) : void {
            writer.writeStringValue("activityIdentifier", synchronizationTaskExecution.activityIdentifier);
            writer.writeNumberValue("countEntitled", synchronizationTaskExecution.countEntitled);
            writer.writeNumberValue("countEntitledForProvisioning", synchronizationTaskExecution.countEntitledForProvisioning);
            writer.writeNumberValue("countEscrowed", synchronizationTaskExecution.countEscrowed);
            writer.writeNumberValue("countEscrowedRaw", synchronizationTaskExecution.countEscrowedRaw);
            writer.writeNumberValue("countExported", synchronizationTaskExecution.countExported);
            writer.writeNumberValue("countExports", synchronizationTaskExecution.countExports);
            writer.writeNumberValue("countImported", synchronizationTaskExecution.countImported);
            writer.writeNumberValue("countImportedDeltas", synchronizationTaskExecution.countImportedDeltas);
            writer.writeNumberValue("countImportedReferenceDeltas", synchronizationTaskExecution.countImportedReferenceDeltas);
            writer.writeObjectValueFromMethod("error_escaped", synchronizationTaskExecution.error_escaped as any, serializeSynchronizationError);
            writer.writeEnumValue<SynchronizationTaskExecutionResult>("state", synchronizationTaskExecution.state);
            writer.writeDateValue("timeBegan", synchronizationTaskExecution.timeBegan);
            writer.writeDateValue("timeEnded", synchronizationTaskExecution.timeEnded);
}
