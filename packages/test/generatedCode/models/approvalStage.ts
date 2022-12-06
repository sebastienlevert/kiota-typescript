import {Entity, Identity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ApprovalStage extends Entity, Partial<Parsable> {
    /** Indicates whether the stage is assigned to the calling user to review. Read-only. */
    assignedToMe?: boolean;
    /** The label provided by the policy creator to identify an approval stage. Read-only. */
    displayName?: string;
    /** The justification associated with the approval stage decision. */
    justification?: string;
    /** The identifier of the reviewer. 00000000-0000-0000-0000-000000000000 if the assigned reviewer hasn't reviewed. Read-only. */
    reviewedBy?: Identity;
    /** The date and time when a decision was recorded. The date and time information uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    reviewedDateTime?: Date;
    /** The result of this approval record. Possible values include: NotReviewed, Approved, Denied. */
    reviewResult?: string;
    /** The stage status. Possible values: InProgress, Initializing, Completed, Expired. Read-only. */
    status?: string;
}
