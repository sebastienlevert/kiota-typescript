import {ChatRenamedEventMessageDetail} from './index';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatRenamedEventMessageDetail(writer: SerializationWriter, chatRenamedEventMessageDetail: ChatRenamedEventMessageDetail | undefined = {}) : void {
        serializeEventMessageDetail(writer, chatRenamedEventMessageDetail)
            writer.writeStringValue("chatDisplayName", chatRenamedEventMessageDetail.chatDisplayName);
            writer.writeStringValue("chatId", chatRenamedEventMessageDetail.chatId);
            writer.writeObjectValueFromMethod("initiator", chatRenamedEventMessageDetail.initiator as any, serializeIdentitySet);
}
