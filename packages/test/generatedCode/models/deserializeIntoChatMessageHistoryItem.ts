import {ChatMessageActions} from './chatMessageActions';
import {deserializeIntoChatMessageReaction} from './deserializeIntoChatMessageReaction';
import {ChatMessageHistoryItem} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessageHistoryItem(chatMessageHistoryItem: ChatMessageHistoryItem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "actions": n => { chatMessageHistoryItem.actions = n.getEnumValue<ChatMessageActions>(ChatMessageActions) as any ; },
        "modifiedDateTime": n => { chatMessageHistoryItem.modifiedDateTime = n.getDateValue() as any ; },
        "reaction": n => { chatMessageHistoryItem.reaction = n.getObject(deserializeIntoChatMessageReaction) as any ; },
    }
}
