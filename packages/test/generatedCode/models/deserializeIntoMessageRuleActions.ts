import {Importance} from './importance';
import {MessageRuleActions, Recipient} from './index';
import {Recipient} from './recipient';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMessageRuleActions(messageRuleActions: MessageRuleActions | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "assignCategories": n => { messageRuleActions.assignCategories = n.getCollectionOfPrimitiveValues<string>(); },
        "copyToFolder": n => { messageRuleActions.copyToFolder = n.getStringValue(); },
        "delete": n => { messageRuleActions.delete = n.getBooleanValue(); },
        "forwardAsAttachmentTo": n => { messageRuleActions.forwardAsAttachmentTo = n.getCollectionOfObjectValuesFromMethod<Recipient>(deserializeIntoRecipient); },
        "forwardTo": n => { messageRuleActions.forwardTo = n.getCollectionOfObjectValuesFromMethod<Recipient>(deserializeIntoRecipient); },
        "markAsRead": n => { messageRuleActions.markAsRead = n.getBooleanValue(); },
        "markImportance": n => { messageRuleActions.markImportance = n.getEnumValue<Importance>(Importance); },
        "moveToFolder": n => { messageRuleActions.moveToFolder = n.getStringValue(); },
        "permanentDelete": n => { messageRuleActions.permanentDelete = n.getBooleanValue(); },
        "redirectTo": n => { messageRuleActions.redirectTo = n.getCollectionOfObjectValuesFromMethod<Recipient>(deserializeIntoRecipient); },
        "stopProcessingRules": n => { messageRuleActions.stopProcessingRules = n.getBooleanValue(); },
    }
}
