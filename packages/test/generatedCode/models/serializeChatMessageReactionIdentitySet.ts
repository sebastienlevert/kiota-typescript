import {ChatMessageReactionIdentitySet} from './index';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatMessageReactionIdentitySet(writer: SerializationWriter, chatMessageReactionIdentitySet: ChatMessageReactionIdentitySet | undefined = {}) : void {
        serializeIdentitySet(writer, chatMessageReactionIdentitySet)
}
