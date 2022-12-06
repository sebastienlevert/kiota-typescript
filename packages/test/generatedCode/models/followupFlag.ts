import {FollowupFlagStatus} from './followupFlagStatus';
import {DateTimeTimeZone} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface FollowupFlag extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The date and time that the follow-up was finished. */
    completedDateTime?: DateTimeTimeZone;
    /** The date and time that the follow up is to be finished. Note: To set the due date, you must also specify the startDateTime; otherwise, you will get a 400 Bad Request response. */
    dueDateTime?: DateTimeTimeZone;
    /** The status for follow-up for an item. Possible values are notFlagged, complete, and flagged. */
    flagStatus?: FollowupFlagStatus;
    /** The OdataType property */
    odataType?: string;
    /** The date and time that the follow-up is to begin. */
    startDateTime?: DateTimeTimeZone;
}
