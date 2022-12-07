import {SynchronizationStatus} from './index';
import {serializeStringKeyLongValuePair} from './serializeStringKeyLongValuePair';
import {serializeSynchronizationProgress} from './serializeSynchronizationProgress';
import {serializeSynchronizationQuarantine} from './serializeSynchronizationQuarantine';
import {serializeSynchronizationTaskExecution} from './serializeSynchronizationTaskExecution';
import {SynchronizationStatusCode} from './synchronizationStatusCode';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSynchronizationStatus(writer: SerializationWriter, synchronizationStatus: SynchronizationStatus | undefined = {}) : void {
            writer.writeEnumValue<SynchronizationStatusCode>("code", synchronizationStatus.code);
            writer.writeNumberValue("countSuccessiveCompleteFailures", synchronizationStatus.countSuccessiveCompleteFailures);
            writer.writeBooleanValue("escrowsPruned", synchronizationStatus.escrowsPruned);
            writer.writeObjectValueFromMethod("lastExecution", synchronizationStatus.lastExecution as any, serializeSynchronizationTaskExecution);
            writer.writeObjectValueFromMethod("lastSuccessfulExecution", synchronizationStatus.lastSuccessfulExecution as any, serializeSynchronizationTaskExecution);
            writer.writeObjectValueFromMethod("lastSuccessfulExecutionWithExports", synchronizationStatus.lastSuccessfulExecutionWithExports as any, serializeSynchronizationTaskExecution);
            writer.writeCollectionOfObjectValuesFromMethod("progress", synchronizationStatus.progress as any, serializeSynchronizationProgress);
            writer.writeObjectValueFromMethod("quarantine", synchronizationStatus.quarantine as any, serializeSynchronizationQuarantine);
            writer.writeDateValue("steadyStateFirstAchievedTime", synchronizationStatus.steadyStateFirstAchievedTime);
            writer.writeDateValue("steadyStateLastAchievedTime", synchronizationStatus.steadyStateLastAchievedTime);
            writer.writeCollectionOfObjectValuesFromMethod("synchronizedEntryCountByType", synchronizationStatus.synchronizedEntryCountByType as any, serializeStringKeyLongValuePair);
            writer.writeStringValue("troubleshootingUrl", synchronizationStatus.troubleshootingUrl);
}
