import {deserializeIntoChatMessage} from './deserializeIntoChatMessage';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {PinnedChatMessageInfo} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPinnedChatMessageInfo(pinnedChatMessageInfo: PinnedChatMessageInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(pinnedChatMessageInfo),
        "message": n => { pinnedChatMessageInfo.message = n.getObject(deserializeIntoChatMessage) as any ; },
    }
}
