import {Entity, IdentitySet, ResultInfo} from '../';
import {CaseAction} from './caseAction';
import {CaseOperationStatus} from './caseOperationStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CaseOperation extends Entity, Partial<Parsable> {
    /** The type of action the operation represents. Possible values are: addToReviewSet,applyTags,contentExport,convertToPdf,estimateStatistics, purgeData */
    action?: CaseAction;
    /** The date and time the operation was completed. */
    completedDateTime?: Date;
    /** The user that created the operation. */
    createdBy?: IdentitySet;
    /** The date and time the operation was created. */
    createdDateTime?: Date;
    /** The progress of the operation. */
    percentProgress?: number;
    /** Contains success and failure-specific result information. */
    resultInfo?: ResultInfo;
    /** The status of the case operation. Possible values are: notStarted, submissionFailed, running, succeeded, partiallySucceeded, failed. */
    status?: CaseOperationStatus;
}
