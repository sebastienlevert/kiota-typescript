import {ChatInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatInfo(writer: SerializationWriter, chatInfo: ChatInfo | undefined = {}) : void {
            writer.writeStringValue("messageId", chatInfo.messageId);
            writer.writeStringValue("replyChainMessageId", chatInfo.replyChainMessageId);
            writer.writeStringValue("threadId", chatInfo.threadId);
}
