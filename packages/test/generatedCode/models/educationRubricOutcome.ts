import {EducationOutcome, RubricQualityFeedbackModel, RubricQualitySelectedColumnModel} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationRubricOutcome extends EducationOutcome, Partial<Parsable> {
    /** A copy of the rubricQualityFeedback property that is made when the grade is released to the student. */
    publishedRubricQualityFeedback?: RubricQualityFeedbackModel[];
    /** A copy of the rubricQualitySelectedLevels property that is made when the grade is released to the student. */
    publishedRubricQualitySelectedLevels?: RubricQualitySelectedColumnModel[];
    /** A collection of specific feedback for each quality of this rubric. */
    rubricQualityFeedback?: RubricQualityFeedbackModel[];
    /** The level that the teacher has selected for each quality while grading this assignment. */
    rubricQualitySelectedLevels?: RubricQualitySelectedColumnModel[];
}
