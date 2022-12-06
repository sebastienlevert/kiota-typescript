import {Entity, UserActivity} from './index';
import {Status} from './status';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ActivityHistoryItem extends Entity, Partial<Parsable> {
    /** Optional. The duration of active user engagement. if not supplied, this is calculated from the startedDateTime and lastActiveDateTime. */
    activeDurationSeconds?: number;
    /** The activity property */
    activity?: UserActivity;
    /** Set by the server. DateTime in UTC when the object was created on the server. */
    createdDateTime?: Date;
    /** Optional. UTC DateTime when the historyItem will undergo hard-delete. Can be set by the client. */
    expirationDateTime?: Date;
    /** Optional. UTC DateTime when the historyItem (activity session) was last understood as active or finished - if null, historyItem status should be Ongoing. */
    lastActiveDateTime?: Date;
    /** Set by the server. DateTime in UTC when the object was modified on the server. */
    lastModifiedDateTime?: Date;
    /** Required. UTC DateTime when the historyItem (activity session) was started. Required for timeline history. */
    startedDateTime?: Date;
    /** Set by the server. A status code used to identify valid objects. Values: active, updated, deleted, ignored. */
    status?: Status;
    /** Optional. The timezone in which the user's device used to generate the activity was located at activity creation time. Values supplied as Olson IDs in order to support cross-platform representation. */
    userTimezone?: string;
}
