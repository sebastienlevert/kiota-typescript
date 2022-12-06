import {MessageRule} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeMessageRuleActions} from './serializeMessageRuleActions';
import {serializeMessageRulePredicates} from './serializeMessageRulePredicates';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMessageRule(writer: SerializationWriter, messageRule: MessageRule | undefined = {}) : void {
        serializeEntity(writer, messageRule)
            writer.writeObjectValueFromMethod("actions", messageRule.actions as any, serializeMessageRuleActions);
            writer.writeObjectValueFromMethod("conditions", messageRule.conditions as any, serializeMessageRulePredicates);
            writer.writeStringValue("displayName", messageRule.displayName);
            writer.writeObjectValueFromMethod("exceptions", messageRule.exceptions as any, serializeMessageRulePredicates);
            writer.writeBooleanValue("hasError", messageRule.hasError);
            writer.writeBooleanValue("isEnabled", messageRule.isEnabled);
            writer.writeBooleanValue("isReadOnly", messageRule.isReadOnly);
            writer.writeNumberValue("sequence", messageRule.sequence);
}
