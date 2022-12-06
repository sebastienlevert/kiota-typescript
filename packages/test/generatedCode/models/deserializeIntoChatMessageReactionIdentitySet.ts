import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {ChatMessageReactionIdentitySet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessageReactionIdentitySet(chatMessageReactionIdentitySet: ChatMessageReactionIdentitySet | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentitySet(chatMessageReactionIdentitySet),
    }
}
