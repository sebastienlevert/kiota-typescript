import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {deserializeIntoTeamworkConversationIdentity} from './deserializeIntoTeamworkConversationIdentity';
import {deserializeIntoTeamworkTagIdentity} from './deserializeIntoTeamworkTagIdentity';
import {ChatMessageMentionedIdentitySet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessageMentionedIdentitySet(chatMessageMentionedIdentitySet: ChatMessageMentionedIdentitySet | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentitySet(chatMessageMentionedIdentitySet),
        "conversation": n => { chatMessageMentionedIdentitySet.conversation = n.getObject(deserializeIntoTeamworkConversationIdentity) as any ; },
        "tag": n => { chatMessageMentionedIdentitySet.tag = n.getObject(deserializeIntoTeamworkTagIdentity) as any ; },
    }
}
