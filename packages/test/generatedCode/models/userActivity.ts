import {ActivityHistoryItem, Entity, Json, VisualInfo} from './index';
import {Status} from './status';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserActivity extends Entity, Partial<Parsable> {
    /** The activationUrl property */
    activationUrl?: string;
    /** The activitySourceHost property */
    activitySourceHost?: string;
    /** The appActivityId property */
    appActivityId?: string;
    /** The appDisplayName property */
    appDisplayName?: string;
    /** The contentInfo property */
    contentInfo?: Json;
    /** The contentUrl property */
    contentUrl?: string;
    /** The createdDateTime property */
    createdDateTime?: Date;
    /** The expirationDateTime property */
    expirationDateTime?: Date;
    /** The fallbackUrl property */
    fallbackUrl?: string;
    /** The historyItems property */
    historyItems?: ActivityHistoryItem[];
    /** The lastModifiedDateTime property */
    lastModifiedDateTime?: Date;
    /** The status property */
    status?: Status;
    /** The userTimezone property */
    userTimezone?: string;
    /** The visualElements property */
    visualElements?: VisualInfo;
}
