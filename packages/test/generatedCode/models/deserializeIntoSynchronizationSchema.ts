import {deserializeIntoDirectoryDefinition} from './deserializeIntoDirectoryDefinition';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoSynchronizationRule} from './deserializeIntoSynchronizationRule';
import {SynchronizationSchema} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronizationSchema(synchronizationSchema: SynchronizationSchema | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(synchronizationSchema),
        "directories": n => { synchronizationSchema.directories = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryDefinition) as any ; },
        "synchronizationRules": n => { synchronizationSchema.synchronizationRules = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSynchronizationRule) as any ; },
        "version": n => { synchronizationSchema.version = n.getStringValue() as any ; },
    }
}
