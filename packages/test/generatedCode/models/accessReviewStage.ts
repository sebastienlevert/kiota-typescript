import {AccessReviewInstanceDecisionItem, AccessReviewReviewerScope, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewStage extends Entity, Partial<Parsable> {
    /** Each user reviewed in an accessReviewStage has a decision item representing if they were approved, denied, or not yet reviewed. */
    decisions?: AccessReviewInstanceDecisionItem[];
    /** DateTime when review stage is scheduled to end. The DatetimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. This property is the cumulative total of the durationInDays for all stages. Read-only. */
    endDateTime?: Date;
    /** This collection of reviewer scopes is used to define the list of fallback reviewers. These fallback reviewers will be notified to take action if no users are found from the list of reviewers specified. This could occur when either the group owner is specified as the reviewer but the group owner does not exist, or manager is specified as reviewer but a user's manager does not exist. */
    fallbackReviewers?: AccessReviewReviewerScope[];
    /** This collection of access review scopes is used to define who the reviewers are. For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the Microsoft Graph API. */
    reviewers?: AccessReviewReviewerScope[];
    /** DateTime when review stage is scheduled to start. May be in the future. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    startDateTime?: Date;
    /** Specifies the status of an accessReviewStage. Possible values: Initializing, NotStarted, Starting, InProgress, Completing, Completed, AutoReviewing, and AutoReviewed. Supports $orderby, and $filter (eq only). Read-only. */
    status?: string;
}
