import {AttributeFlowBehavior} from './attributeFlowBehavior';
import {AttributeFlowType} from './attributeFlowType';
import {AttributeMapping} from './index';
import {serializeAttributeMappingSource} from './serializeAttributeMappingSource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttributeMapping(writer: SerializationWriter, attributeMapping: AttributeMapping | undefined = {}) : void {
            writer.writeStringValue("defaultValue", attributeMapping.defaultValue);
            writer.writeBooleanValue("exportMissingReferences", attributeMapping.exportMissingReferences);
            writer.writeEnumValue<AttributeFlowBehavior>("flowBehavior", attributeMapping.flowBehavior);
            writer.writeEnumValue<AttributeFlowType>("flowType", attributeMapping.flowType);
            writer.writeNumberValue("matchingPriority", attributeMapping.matchingPriority);
            writer.writeObjectValueFromMethod("source", attributeMapping.source as any, serializeAttributeMappingSource);
            writer.writeStringValue("targetAttributeName", attributeMapping.targetAttributeName);
}
