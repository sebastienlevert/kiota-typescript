import {ChatMessageMention} from './index';
import {serializeChatMessageMentionedIdentitySet} from './serializeChatMessageMentionedIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatMessageMention(writer: SerializationWriter, chatMessageMention: ChatMessageMention | undefined = {}) : void {
            writer.writeNumberValue("id", chatMessageMention.id);
            writer.writeObjectValueFromMethod("mentioned", chatMessageMention.mentioned as any, serializeChatMessageMentionedIdentitySet);
            writer.writeStringValue("mentionText", chatMessageMention.mentionText);
}
