import {AttributeFlowBehavior} from './attributeFlowBehavior';
import {AttributeFlowType} from './attributeFlowType';
import {deserializeIntoAttributeMappingSource} from './deserializeIntoAttributeMappingSource';
import {AttributeMapping} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttributeMapping(attributeMapping: AttributeMapping | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "defaultValue": n => { attributeMapping.defaultValue = n.getStringValue() as any ; },
        "exportMissingReferences": n => { attributeMapping.exportMissingReferences = n.getBooleanValue() as any ; },
        "flowBehavior": n => { attributeMapping.flowBehavior = n.getEnumValue<AttributeFlowBehavior>(AttributeFlowBehavior) as any ; },
        "flowType": n => { attributeMapping.flowType = n.getEnumValue<AttributeFlowType>(AttributeFlowType) as any ; },
        "matchingPriority": n => { attributeMapping.matchingPriority = n.getNumberValue() as any ; },
        "source": n => { attributeMapping.source = n.getObject(deserializeIntoAttributeMappingSource) as any ; },
        "targetAttributeName": n => { attributeMapping.targetAttributeName = n.getStringValue() as any ; },
    }
}
