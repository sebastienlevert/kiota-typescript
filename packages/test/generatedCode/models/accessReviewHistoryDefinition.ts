import {AccessReviewHistoryDecisionFilter} from './accessReviewHistoryDecisionFilter';
import {AccessReviewHistoryStatus} from './accessReviewHistoryStatus';
import {AccessReviewHistoryInstance, AccessReviewHistoryScheduleSettings, AccessReviewScope, Entity, UserIdentity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewHistoryDefinition extends Entity, Partial<Parsable> {
    /** The createdBy property */
    createdBy?: UserIdentity;
    /** Timestamp when the access review definition was created. */
    createdDateTime?: Date;
    /** Determines which review decisions will be included in the fetched review history data if specified. Optional on create. All decisions will be included by default if no decisions are provided on create. Possible values are: approve, deny, dontKnow, notReviewed, and notNotified. */
    decisions?: AccessReviewHistoryDecisionFilter[];
    /** Name for the access review history data collection. Required. */
    displayName?: string;
    /** If the accessReviewHistoryDefinition is a recurring definition, instances represent each recurrence. A definition that does not recur will have exactly one instance. */
    instances?: AccessReviewHistoryInstance[];
    /** A timestamp. Reviews ending on or before this date will be included in the fetched history data. Only required if scheduleSettings is not defined. */
    reviewHistoryPeriodEndDateTime?: Date;
    /** A timestamp. Reviews starting on or before this date will be included in the fetched history data. Only required if scheduleSettings is not defined. */
    reviewHistoryPeriodStartDateTime?: Date;
    /** The settings for a recurring access review history definition series. Only required if reviewHistoryPeriodStartDateTime or reviewHistoryPeriodEndDateTime are not defined. Not supported yet. */
    scheduleSettings?: AccessReviewHistoryScheduleSettings;
    /** Used to scope what reviews are included in the fetched history data. Fetches reviews whose scope matches with this provided scope. Required. */
    scopes?: AccessReviewScope[];
    /** Represents the status of the review history data collection. The possible values are: done, inProgress, error, requested, unknownFutureValue. */
    status?: AccessReviewHistoryStatus;
}
