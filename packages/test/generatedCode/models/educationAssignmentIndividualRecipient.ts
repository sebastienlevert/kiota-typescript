import {EducationAssignmentRecipient} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationAssignmentIndividualRecipient extends EducationAssignmentRecipient, Partial<Parsable> {
    /** A collection of IDs of the recipients. */
    recipients?: string[];
}
