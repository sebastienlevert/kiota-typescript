import {TeamworkNotificationRecipient} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamMembersNotificationRecipient extends Partial<Parsable>, TeamworkNotificationRecipient {
    /** The unique identifier for the team whose members should receive the notification. */
    teamId?: string;
}
