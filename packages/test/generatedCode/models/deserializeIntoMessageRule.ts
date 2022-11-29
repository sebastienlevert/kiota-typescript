import {Entity} from './entity';
import {MessageRule, MessageRuleActions, MessageRulePredicates} from './index';
import {MessageRuleActions} from './messageRuleActions';
import {MessageRulePredicates} from './messageRulePredicates';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMessageRule(messageRule: MessageRule | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntityInterface(messageRule),
        "actions": n => { messageRule.actions = n.deserializeIntoMessageRuleActionsInterface(); },
        "conditions": n => { messageRule.conditions = n.deserializeIntoMessageRulePredicatesInterface(); },
        "displayName": n => { messageRule.displayName = n.getStringValue(); },
        "exceptions": n => { messageRule.exceptions = n.deserializeIntoMessageRulePredicatesInterface(); },
        "hasError": n => { messageRule.hasError = n.getBooleanValue(); },
        "isEnabled": n => { messageRule.isEnabled = n.getBooleanValue(); },
        "isReadOnly": n => { messageRule.isReadOnly = n.getBooleanValue(); },
        "sequence": n => { messageRule.sequence = n.getNumberValue(); },
    }
}
