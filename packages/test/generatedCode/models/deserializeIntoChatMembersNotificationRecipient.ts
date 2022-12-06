import {deserializeIntoTeamworkNotificationRecipient} from './deserializeIntoTeamworkNotificationRecipient';
import {ChatMembersNotificationRecipient} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMembersNotificationRecipient(chatMembersNotificationRecipient: ChatMembersNotificationRecipient | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTeamworkNotificationRecipient(chatMembersNotificationRecipient),
        "chatId": n => { chatMembersNotificationRecipient.chatId = n.getStringValue() as any ; },
    }
}
