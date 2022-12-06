import {ChatMembersNotificationRecipient} from './index';
import {serializeTeamworkNotificationRecipient} from './serializeTeamworkNotificationRecipient';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatMembersNotificationRecipient(writer: SerializationWriter, chatMembersNotificationRecipient: ChatMembersNotificationRecipient | undefined = {}) : void {
        serializeTeamworkNotificationRecipient(writer, chatMembersNotificationRecipient)
            writer.writeStringValue("chatId", chatMembersNotificationRecipient.chatId);
}
