import {EducationResource, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationSubmissionResource extends Entity, Partial<Parsable> {
    /** Pointer to the assignment from which this resource was copied. If this is null, the student uploaded the resource. */
    assignmentResourceUrl?: string;
    /** Resource object. */
    resource?: EducationResource;
}
