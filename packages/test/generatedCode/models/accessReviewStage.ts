import {AccessReviewInstanceDecisionItem, AccessReviewReviewerScope, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewStage extends Entity, Partial<Parsable> {
    /** Each user reviewed in an accessReviewStage has a decision item representing if they were approved, denied, or not yet reviewed. */
    decisions?: AccessReviewInstanceDecisionItem[];
    /** The date and time in ISO 8601 format and UTC time when the review stage is scheduled to end. This property is the cumulative total of the durationInDays for all stages. Read-only. */
    endDateTime?: Date;
    /** This collection of reviewer scopes is used to define the list of fallback reviewers. These fallback reviewers will be notified to take action if no users are found from the list of reviewers specified. This could occur when either the group owner is specified as the reviewer but the group owner does not exist, or manager is specified as reviewer but a user's manager does not exist. */
    fallbackReviewers?: AccessReviewReviewerScope[];
    /** This collection of access review scopes is used to define who the reviewers are. For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the Microsoft Graph API. */
    reviewers?: AccessReviewReviewerScope[];
    /** The date and time in ISO 8601 format and UTC time when the review stage is scheduled to start. Read-only. */
    startDateTime?: Date;
    /** Specifies the status of an accessReviewStage. Possible values: Initializing, NotStarted, Starting, InProgress, Completing, Completed, AutoReviewing, and AutoReviewed. Supports $orderby, and $filter (eq only). Read-only. */
    status?: string;
}
