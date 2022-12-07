import {ChatInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatInfo(chatInfo: ChatInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "messageId": n => { chatInfo.messageId = n.getStringValue() as any ; },
        "replyChainMessageId": n => { chatInfo.replyChainMessageId = n.getStringValue() as any ; },
        "threadId": n => { chatInfo.threadId = n.getStringValue() as any ; },
    }
}
