import {deserializeIntoObjectMapping} from './deserializeIntoObjectMapping';
import {deserializeIntoStringKeyStringValuePair} from './deserializeIntoStringKeyStringValuePair';
import {SynchronizationRule} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronizationRule(synchronizationRule: SynchronizationRule | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "editable": n => { synchronizationRule.editable = n.getBooleanValue() as any ; },
        "id": n => { synchronizationRule.id = n.getStringValue() as any ; },
        "metadata": n => { synchronizationRule.metadata = n.getCollectionOfObjectValuesFromMethod(deserializeIntoStringKeyStringValuePair) as any ; },
        "name": n => { synchronizationRule.name = n.getStringValue() as any ; },
        "objectMappings": n => { synchronizationRule.objectMappings = n.getCollectionOfObjectValuesFromMethod(deserializeIntoObjectMapping) as any ; },
        "priority": n => { synchronizationRule.priority = n.getNumberValue() as any ; },
        "sourceDirectoryName": n => { synchronizationRule.sourceDirectoryName = n.getStringValue() as any ; },
        "targetDirectoryName": n => { synchronizationRule.targetDirectoryName = n.getStringValue() as any ; },
    }
}
