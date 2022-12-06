import {EducationSubmissionStatus} from './educationSubmissionStatus';
import {EducationOutcome, EducationSubmissionRecipient, EducationSubmissionResource, Entity, IdentitySet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationSubmission extends Entity, Partial<Parsable> {
    /** The outcomes property */
    outcomes?: EducationOutcome[];
    /** User who moved the status of this submission to reassigned. */
    reassignedBy?: IdentitySet;
    /** Moment in time when the submission was reassigned. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    reassignedDateTime?: Date;
    /** Who this submission is assigned to. */
    recipient?: EducationSubmissionRecipient;
    /** The resources property */
    resources?: EducationSubmissionResource[];
    /** Folder where all file resources for this submission need to be stored. */
    resourcesFolderUrl?: string;
    /** User who moved the status of this submission to returned. */
    returnedBy?: IdentitySet;
    /** Moment in time when the submission was returned. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    returnedDateTime?: Date;
    /** Read-only. Possible values are: working, submitted, released, returned, and reassigned. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: reassigned. */
    status?: EducationSubmissionStatus;
    /** User who moved the resource into the submitted state. */
    submittedBy?: IdentitySet;
    /** Moment in time when the submission was moved into the submitted state. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    submittedDateTime?: Date;
    /** The submittedResources property */
    submittedResources?: EducationSubmissionResource[];
    /** User who moved the resource from submitted into the working state. */
    unsubmittedBy?: IdentitySet;
    /** Moment in time when the submission was moved from submitted into the working state. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    unsubmittedDateTime?: Date;
}
