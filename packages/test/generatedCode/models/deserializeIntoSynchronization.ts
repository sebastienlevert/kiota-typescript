import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoSynchronizationJob} from './deserializeIntoSynchronizationJob';
import {deserializeIntoSynchronizationSecretKeyStringValuePair} from './deserializeIntoSynchronizationSecretKeyStringValuePair';
import {deserializeIntoSynchronizationTemplate} from './deserializeIntoSynchronizationTemplate';
import {Synchronization} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronization(synchronization: Synchronization | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(synchronization),
        "jobs": n => { synchronization.jobs = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSynchronizationJob) as any ; },
        "secrets": n => { synchronization.secrets = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSynchronizationSecretKeyStringValuePair) as any ; },
        "templates": n => { synchronization.templates = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSynchronizationTemplate) as any ; },
    }
}
