import {EducationAssignmentGradeType, EducationItemBody, Entity, IdentitySet, RubricLevel, RubricQuality} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationRubric extends Entity, Partial<Parsable> {
    /** The user who created this resource. */
    createdBy?: IdentitySet;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    createdDateTime?: Date;
    /** The description of this rubric. */
    description?: EducationItemBody;
    /** The name of this rubric. */
    displayName?: string;
    /** The grading type of this rubric -- null for a no-points rubric, or educationAssignmentPointsGradeType for a points rubric. */
    grading?: EducationAssignmentGradeType;
    /** The last user to modify the resource. */
    lastModifiedBy?: IdentitySet;
    /** Moment in time when the resource was last modified.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    lastModifiedDateTime?: Date;
    /** The collection of levels making up this rubric. */
    levels?: RubricLevel[];
    /** The collection of qualities making up this rubric. */
    qualities?: RubricQuality[];
}
