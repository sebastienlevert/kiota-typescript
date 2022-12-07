import {deserializeIntoAttributeMapping} from './deserializeIntoAttributeMapping';
import {deserializeIntoFilter} from './deserializeIntoFilter';
import {deserializeIntoMetadataEntry} from './deserializeIntoMetadataEntry';
import {ObjectMapping} from './index';
import {ObjectFlowTypes} from './objectFlowTypes';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoObjectMapping(objectMapping: ObjectMapping | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "attributeMappings": n => { objectMapping.attributeMappings = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAttributeMapping) as any ; },
        "enabled": n => { objectMapping.enabled = n.getBooleanValue() as any ; },
        "flowTypes": n => { objectMapping.flowTypes = n.getEnumValue<ObjectFlowTypes>(ObjectFlowTypes) as any ; },
        "metadata": n => { objectMapping.metadata = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMetadataEntry) as any ; },
        "name": n => { objectMapping.name = n.getStringValue() as any ; },
        "scope": n => { objectMapping.scope = n.getObject(deserializeIntoFilter) as any ; },
        "sourceObjectName": n => { objectMapping.sourceObjectName = n.getStringValue() as any ; },
        "targetObjectName": n => { objectMapping.targetObjectName = n.getStringValue() as any ; },
    }
}
