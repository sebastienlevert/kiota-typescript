import {deserializeIntoStringKeyLongValuePair} from './deserializeIntoStringKeyLongValuePair';
import {deserializeIntoSynchronizationProgress} from './deserializeIntoSynchronizationProgress';
import {deserializeIntoSynchronizationQuarantine} from './deserializeIntoSynchronizationQuarantine';
import {deserializeIntoSynchronizationTaskExecution} from './deserializeIntoSynchronizationTaskExecution';
import {SynchronizationStatus} from './index';
import {SynchronizationStatusCode} from './synchronizationStatusCode';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronizationStatus(synchronizationStatus: SynchronizationStatus | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { synchronizationStatus.code = n.getEnumValue<SynchronizationStatusCode>(SynchronizationStatusCode) as any ; },
        "countSuccessiveCompleteFailures": n => { synchronizationStatus.countSuccessiveCompleteFailures = n.getNumberValue() as any ; },
        "escrowsPruned": n => { synchronizationStatus.escrowsPruned = n.getBooleanValue() as any ; },
        "lastExecution": n => { synchronizationStatus.lastExecution = n.getObject(deserializeIntoSynchronizationTaskExecution) as any ; },
        "lastSuccessfulExecution": n => { synchronizationStatus.lastSuccessfulExecution = n.getObject(deserializeIntoSynchronizationTaskExecution) as any ; },
        "lastSuccessfulExecutionWithExports": n => { synchronizationStatus.lastSuccessfulExecutionWithExports = n.getObject(deserializeIntoSynchronizationTaskExecution) as any ; },
        "progress": n => { synchronizationStatus.progress = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSynchronizationProgress) as any ; },
        "quarantine": n => { synchronizationStatus.quarantine = n.getObject(deserializeIntoSynchronizationQuarantine) as any ; },
        "steadyStateFirstAchievedTime": n => { synchronizationStatus.steadyStateFirstAchievedTime = n.getDateValue() as any ; },
        "steadyStateLastAchievedTime": n => { synchronizationStatus.steadyStateLastAchievedTime = n.getDateValue() as any ; },
        "synchronizedEntryCountByType": n => { synchronizationStatus.synchronizedEntryCountByType = n.getCollectionOfObjectValuesFromMethod(deserializeIntoStringKeyLongValuePair) as any ; },
        "troubleshootingUrl": n => { synchronizationStatus.troubleshootingUrl = n.getStringValue() as any ; },
    }
}
