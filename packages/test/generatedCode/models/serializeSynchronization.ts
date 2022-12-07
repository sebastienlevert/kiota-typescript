import {Synchronization} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeSynchronizationJob} from './serializeSynchronizationJob';
import {serializeSynchronizationSecretKeyStringValuePair} from './serializeSynchronizationSecretKeyStringValuePair';
import {serializeSynchronizationTemplate} from './serializeSynchronizationTemplate';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSynchronization(writer: SerializationWriter, synchronization: Synchronization | undefined = {}) : void {
        serializeEntity(writer, synchronization)
            writer.writeCollectionOfObjectValuesFromMethod("jobs", synchronization.jobs as any, serializeSynchronizationJob);
            writer.writeCollectionOfObjectValuesFromMethod("secrets", synchronization.secrets as any, serializeSynchronizationSecretKeyStringValuePair);
            writer.writeCollectionOfObjectValuesFromMethod("templates", synchronization.templates as any, serializeSynchronizationTemplate);
}
