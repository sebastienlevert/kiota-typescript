import {TeamworkNotificationRecipient} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChannelMembersNotificationRecipient extends Partial<Parsable>, TeamworkNotificationRecipient {
    /** The unique identifier for the channel whose members should receive the notification. */
    channelId?: string;
    /** The unique identifier for the team under which the channel resides. */
    teamId?: string;
}
