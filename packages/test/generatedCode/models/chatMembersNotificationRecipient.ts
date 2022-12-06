import {TeamworkNotificationRecipient} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMembersNotificationRecipient extends Partial<Parsable>, TeamworkNotificationRecipient {
    /** The unique identifier for the chat whose members should receive the notifications. */
    chatId?: string;
}
