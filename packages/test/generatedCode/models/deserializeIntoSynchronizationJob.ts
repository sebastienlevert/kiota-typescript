import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoKeyValuePair} from './deserializeIntoKeyValuePair';
import {deserializeIntoSynchronizationSchedule} from './deserializeIntoSynchronizationSchedule';
import {deserializeIntoSynchronizationSchema} from './deserializeIntoSynchronizationSchema';
import {deserializeIntoSynchronizationStatus} from './deserializeIntoSynchronizationStatus';
import {SynchronizationJob} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronizationJob(synchronizationJob: SynchronizationJob | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(synchronizationJob),
        "schedule": n => { synchronizationJob.schedule = n.getObject(deserializeIntoSynchronizationSchedule) as any ; },
        "schema": n => { synchronizationJob.schema = n.getObject(deserializeIntoSynchronizationSchema) as any ; },
        "status": n => { synchronizationJob.status = n.getObject(deserializeIntoSynchronizationStatus) as any ; },
        "synchronizationJobSettings": n => { synchronizationJob.synchronizationJobSettings = n.getCollectionOfObjectValuesFromMethod(deserializeIntoKeyValuePair) as any ; },
        "templateId": n => { synchronizationJob.templateId = n.getStringValue() as any ; },
    }
}
