import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GroupLifecyclePolicy extends Entity, Partial<Parsable> {
    /** List of email address to send notifications for groups without owners. Multiple email address can be defined by separating email address with a semicolon. */
    alternateNotificationEmails?: string;
    /** Number of days before a group expires and needs to be renewed. Once renewed, the group expiration is extended by the number of days defined. */
    groupLifetimeInDays?: number;
    /** The group type for which the expiration policy applies. Possible values are All, Selected or None. */
    managedGroupTypes?: string;
}
