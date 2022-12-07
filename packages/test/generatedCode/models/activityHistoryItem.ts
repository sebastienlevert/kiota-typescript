import {Entity, UserActivity} from './index';
import {Status} from './status';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ActivityHistoryItem extends Entity, Partial<Parsable> {
    /** The activeDurationSeconds property */
    activeDurationSeconds?: number;
    /** The activity property */
    activity?: UserActivity;
    /** The createdDateTime property */
    createdDateTime?: Date;
    /** The expirationDateTime property */
    expirationDateTime?: Date;
    /** The lastActiveDateTime property */
    lastActiveDateTime?: Date;
    /** The lastModifiedDateTime property */
    lastModifiedDateTime?: Date;
    /** The startedDateTime property */
    startedDateTime?: Date;
    /** The status property */
    status?: Status;
    /** The userTimezone property */
    userTimezone?: string;
}
