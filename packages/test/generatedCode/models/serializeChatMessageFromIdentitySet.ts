import {ChatMessageFromIdentitySet} from './index';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatMessageFromIdentitySet(writer: SerializationWriter, chatMessageFromIdentitySet: ChatMessageFromIdentitySet | undefined = {}) : void {
        serializeIdentitySet(writer, chatMessageFromIdentitySet)
}
