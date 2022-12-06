import {ChatMessageMentionedIdentitySet} from './index';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeTeamworkConversationIdentity} from './serializeTeamworkConversationIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatMessageMentionedIdentitySet(writer: SerializationWriter, chatMessageMentionedIdentitySet: ChatMessageMentionedIdentitySet | undefined = {}) : void {
        serializeIdentitySet(writer, chatMessageMentionedIdentitySet)
            writer.writeObjectValueFromMethod("conversation", chatMessageMentionedIdentitySet.conversation as any, serializeTeamworkConversationIdentity);
}
