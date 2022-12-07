import {deserializeIntoChatMessageReactionIdentitySet} from './deserializeIntoChatMessageReactionIdentitySet';
import {ChatMessageReaction} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessageReaction(chatMessageReaction: ChatMessageReaction | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "createdDateTime": n => { chatMessageReaction.createdDateTime = n.getDateValue() as any ; },
        "reactionType": n => { chatMessageReaction.reactionType = n.getStringValue() as any ; },
        "user": n => { chatMessageReaction.user = n.getObject(deserializeIntoChatMessageReactionIdentitySet) as any ; },
    }
}
