import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoMetadataEntry} from './deserializeIntoMetadataEntry';
import {deserializeIntoSynchronizationSchema} from './deserializeIntoSynchronizationSchema';
import {SynchronizationTemplate} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronizationTemplate(synchronizationTemplate: SynchronizationTemplate | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(synchronizationTemplate),
        "applicationId": n => { synchronizationTemplate.applicationId = n.getStringValue() as any ; },
        "default": n => { synchronizationTemplate.default_escaped = n.getBooleanValue() as any ; },
        "description": n => { synchronizationTemplate.description = n.getStringValue() as any ; },
        "discoverable": n => { synchronizationTemplate.discoverable = n.getBooleanValue() as any ; },
        "factoryTag": n => { synchronizationTemplate.factoryTag = n.getStringValue() as any ; },
        "metadata": n => { synchronizationTemplate.metadata = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMetadataEntry) as any ; },
        "schema": n => { synchronizationTemplate.schema = n.getObject(deserializeIntoSynchronizationSchema) as any ; },
    }
}
