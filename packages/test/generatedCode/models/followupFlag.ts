import {FollowupFlagStatus} from './followupFlagStatus';
import {DateTimeTimeZone} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface FollowupFlag extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The completedDateTime property */
    completedDateTime?: DateTimeTimeZone;
    /** The dueDateTime property */
    dueDateTime?: DateTimeTimeZone;
    /** The flagStatus property */
    flagStatus?: FollowupFlagStatus;
    /** The startDateTime property */
    startDateTime?: DateTimeTimeZone;
}
