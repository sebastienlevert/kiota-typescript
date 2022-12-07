import {deserializeIntoSynchronizationError} from './deserializeIntoSynchronizationError';
import {SynchronizationTaskExecution} from './index';
import {SynchronizationTaskExecutionResult} from './synchronizationTaskExecutionResult';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronizationTaskExecution(synchronizationTaskExecution: SynchronizationTaskExecution | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "activityIdentifier": n => { synchronizationTaskExecution.activityIdentifier = n.getStringValue() as any ; },
        "countEntitled": n => { synchronizationTaskExecution.countEntitled = n.getNumberValue() as any ; },
        "countEntitledForProvisioning": n => { synchronizationTaskExecution.countEntitledForProvisioning = n.getNumberValue() as any ; },
        "countEscrowed": n => { synchronizationTaskExecution.countEscrowed = n.getNumberValue() as any ; },
        "countEscrowedRaw": n => { synchronizationTaskExecution.countEscrowedRaw = n.getNumberValue() as any ; },
        "countExported": n => { synchronizationTaskExecution.countExported = n.getNumberValue() as any ; },
        "countExports": n => { synchronizationTaskExecution.countExports = n.getNumberValue() as any ; },
        "countImported": n => { synchronizationTaskExecution.countImported = n.getNumberValue() as any ; },
        "countImportedDeltas": n => { synchronizationTaskExecution.countImportedDeltas = n.getNumberValue() as any ; },
        "countImportedReferenceDeltas": n => { synchronizationTaskExecution.countImportedReferenceDeltas = n.getNumberValue() as any ; },
        "error": n => { synchronizationTaskExecution.error_escaped = n.getObject(deserializeIntoSynchronizationError) as any ; },
        "state": n => { synchronizationTaskExecution.state = n.getEnumValue<SynchronizationTaskExecutionResult>(SynchronizationTaskExecutionResult) as any ; },
        "timeBegan": n => { synchronizationTaskExecution.timeBegan = n.getDateValue() as any ; },
        "timeEnded": n => { synchronizationTaskExecution.timeEnded = n.getDateValue() as any ; },
    }
}
