import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {ChatMessageFromIdentitySet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessageFromIdentitySet(chatMessageFromIdentitySet: ChatMessageFromIdentitySet | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentitySet(chatMessageFromIdentitySet),
    }
}
