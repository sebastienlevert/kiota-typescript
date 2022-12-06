import {EducationAssignmentPointsGrade, EducationOutcome} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationPointsOutcome extends EducationOutcome, Partial<Parsable> {
    /** The numeric grade the teacher has given the student for this assignment. */
    points?: EducationAssignmentPointsGrade;
    /** A copy of the points property that is made when the grade is released to the student. */
    publishedPoints?: EducationAssignmentPointsGrade;
}
