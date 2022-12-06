import {ConditionalAccessTemplate} from './index';
import {serializeConditionalAccessPolicyDetail} from './serializeConditionalAccessPolicyDetail';
import {serializeEntity} from './serializeEntity';
import {TemplateScenarios} from './templateScenarios';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessTemplate(writer: SerializationWriter, conditionalAccessTemplate: ConditionalAccessTemplate | undefined = {}) : void {
        serializeEntity(writer, conditionalAccessTemplate)
            writer.writeStringValue("description", conditionalAccessTemplate.description);
            writer.writeObjectValueFromMethod("details", conditionalAccessTemplate.details as any, serializeConditionalAccessPolicyDetail);
            writer.writeStringValue("name", conditionalAccessTemplate.name);
            writer.writeEnumValue<TemplateScenarios>("scenarios", conditionalAccessTemplate.scenarios);
}
