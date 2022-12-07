import {Entity, PayloadTypes, TargetPolicyEndpoints} from './index';
import {Priority} from './priority';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Notification extends Entity, Partial<Parsable> {
    /** Sets how long (in seconds) this notification content will stay in each platform's notification viewer. For example, when the notification is delivered to a Windows device, the value of this property is passed on to ToastNotification.ExpirationTime, which determines how long the toast notification will stay in the user's Windows Action Center. */
    displayTimeToLive?: number;
    /** Sets a UTC expiration date and time on a user notification using ISO 8601 format (for example, midnight UTC on Jan 1, 2019 would look like this: '2019-01-01T00:00:00Z'). When time is up, the notification is removed from the Microsoft Graph notification feed store completely and is no longer part of notification history. Max value is 30 days. */
    expirationDateTime?: Date;
    /** The name of the group that this notification belongs to. It is set by the developer for the purpose of grouping notifications together. */
    groupName?: string;
    /** The payload property */
    payload?: PayloadTypes;
    /** The priority property */
    priority?: Priority;
    /** Represents the host name of the app to which the calling service wants to post the notification, for the given user. If targeting web endpoints (see targetPolicy.platformTypes), ensure that targetHostName is the same as the name used when creating a subscription on the client side within the application JSON property. */
    targetHostName?: string;
    /** The targetPolicy property */
    targetPolicy?: TargetPolicyEndpoints;
}
