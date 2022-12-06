import {deserializeIntoConditionalAccessPolicyDetail} from './deserializeIntoConditionalAccessPolicyDetail';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ConditionalAccessTemplate} from './index';
import {TemplateScenarios} from './templateScenarios';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessTemplate(conditionalAccessTemplate: ConditionalAccessTemplate | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(conditionalAccessTemplate),
        "description": n => { conditionalAccessTemplate.description = n.getStringValue() as any ; },
        "details": n => { conditionalAccessTemplate.details = n.getObject(deserializeIntoConditionalAccessPolicyDetail) as any ; },
        "name": n => { conditionalAccessTemplate.name = n.getStringValue() as any ; },
        "scenarios": n => { conditionalAccessTemplate.scenarios = n.getEnumValue<TemplateScenarios>(TemplateScenarios) as any ; },
    }
}
