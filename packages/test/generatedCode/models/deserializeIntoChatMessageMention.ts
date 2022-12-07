import {deserializeIntoChatMessageMentionedIdentitySet} from './deserializeIntoChatMessageMentionedIdentitySet';
import {ChatMessageMention} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessageMention(chatMessageMention: ChatMessageMention | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { chatMessageMention.id = n.getNumberValue() as any ; },
        "mentioned": n => { chatMessageMention.mentioned = n.getObject(deserializeIntoChatMessageMentionedIdentitySet) as any ; },
        "mentionText": n => { chatMessageMention.mentionText = n.getStringValue() as any ; },
    }
}
