import {EducationSubmissionRecipient} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationSubmissionIndividualRecipient extends EducationSubmissionRecipient, Partial<Parsable> {
    /** User ID of the user to whom the submission is assigned. */
    userId?: string;
}
