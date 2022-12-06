import {EducationAssignmentGrade} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationAssignmentPointsGrade extends EducationAssignmentGrade, Partial<Parsable> {
    /** Number of points a teacher is giving this submission object. */
    points?: number;
}
