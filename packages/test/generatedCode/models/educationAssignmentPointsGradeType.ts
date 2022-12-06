import {EducationAssignmentGradeType} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationAssignmentPointsGradeType extends EducationAssignmentGradeType, Partial<Parsable> {
    /** Max points possible for this assignment. */
    maxPoints?: number;
}
