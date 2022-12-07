import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoMessageRuleActions} from './deserializeIntoMessageRuleActions';
import {deserializeIntoMessageRulePredicates} from './deserializeIntoMessageRulePredicates';
import {MessageRule} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMessageRule(messageRule: MessageRule | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(messageRule),
        "actions": n => { messageRule.actions = n.getObject(deserializeIntoMessageRuleActions) as any ; },
        "conditions": n => { messageRule.conditions = n.getObject(deserializeIntoMessageRulePredicates) as any ; },
        "displayName": n => { messageRule.displayName = n.getStringValue() as any ; },
        "exceptions": n => { messageRule.exceptions = n.getObject(deserializeIntoMessageRulePredicates) as any ; },
        "hasError": n => { messageRule.hasError = n.getBooleanValue() as any ; },
        "isEnabled": n => { messageRule.isEnabled = n.getBooleanValue() as any ; },
        "isReadOnly": n => { messageRule.isReadOnly = n.getBooleanValue() as any ; },
        "sequence": n => { messageRule.sequence = n.getNumberValue() as any ; },
    }
}
