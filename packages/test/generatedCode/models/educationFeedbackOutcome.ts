import {EducationFeedback, EducationOutcome} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationFeedbackOutcome extends EducationOutcome, Partial<Parsable> {
    /** Teacher's written feedback to the student. */
    feedback?: EducationFeedback;
    /** A copy of the feedback property that is made when the grade is released to the student. */
    publishedFeedback?: EducationFeedback;
}
