import {deserializeIntoRecipient} from './deserializeIntoRecipient';
import {Importance} from './importance';
import {MessageRuleActions} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMessageRuleActions(messageRuleActions: MessageRuleActions | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "assignCategories": n => { messageRuleActions.assignCategories = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "copyToFolder": n => { messageRuleActions.copyToFolder = n.getStringValue() as any ; },
        "delete": n => { messageRuleActions.delete = n.getBooleanValue() as any ; },
        "forwardAsAttachmentTo": n => { messageRuleActions.forwardAsAttachmentTo = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRecipient) as any ; },
        "forwardTo": n => { messageRuleActions.forwardTo = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRecipient) as any ; },
        "markAsRead": n => { messageRuleActions.markAsRead = n.getBooleanValue() as any ; },
        "markImportance": n => { messageRuleActions.markImportance = n.getEnumValue<Importance>(Importance) as any ; },
        "moveToFolder": n => { messageRuleActions.moveToFolder = n.getStringValue() as any ; },
        "permanentDelete": n => { messageRuleActions.permanentDelete = n.getBooleanValue() as any ; },
        "redirectTo": n => { messageRuleActions.redirectTo = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRecipient) as any ; },
        "stopProcessingRules": n => { messageRuleActions.stopProcessingRules = n.getBooleanValue() as any ; },
    }
}
