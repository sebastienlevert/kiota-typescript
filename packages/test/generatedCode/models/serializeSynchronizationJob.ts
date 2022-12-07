import {SynchronizationJob} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeKeyValuePair} from './serializeKeyValuePair';
import {serializeSynchronizationSchedule} from './serializeSynchronizationSchedule';
import {serializeSynchronizationSchema} from './serializeSynchronizationSchema';
import {serializeSynchronizationStatus} from './serializeSynchronizationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSynchronizationJob(writer: SerializationWriter, synchronizationJob: SynchronizationJob | undefined = {}) : void {
        serializeEntity(writer, synchronizationJob)
            writer.writeObjectValueFromMethod("schedule", synchronizationJob.schedule as any, serializeSynchronizationSchedule);
            writer.writeObjectValueFromMethod("schema", synchronizationJob.schema as any, serializeSynchronizationSchema);
            writer.writeObjectValueFromMethod("status", synchronizationJob.status as any, serializeSynchronizationStatus);
            writer.writeCollectionOfObjectValuesFromMethod("synchronizationJobSettings", synchronizationJob.synchronizationJobSettings as any, serializeKeyValuePair);
            writer.writeStringValue("templateId", synchronizationJob.templateId);
}
