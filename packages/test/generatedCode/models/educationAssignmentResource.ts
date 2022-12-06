import {EducationResource, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationAssignmentResource extends Entity, Partial<Parsable> {
    /** Indicates whether this resource should be copied to each student submission for modification and submission. Required */
    distributeForStudentWork?: boolean;
    /** Resource object that has been associated with this assignment. */
    resource?: EducationResource;
}
