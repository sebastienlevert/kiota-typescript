import {ChatMessageReaction} from './index';
import {serializeChatMessageReactionIdentitySet} from './serializeChatMessageReactionIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatMessageReaction(writer: SerializationWriter, chatMessageReaction: ChatMessageReaction | undefined = {}) : void {
            writer.writeDateValue("createdDateTime", chatMessageReaction.createdDateTime);
            writer.writeStringValue("reactionType", chatMessageReaction.reactionType);
            writer.writeObjectValueFromMethod("user", chatMessageReaction.user as any, serializeChatMessageReactionIdentitySet);
}
