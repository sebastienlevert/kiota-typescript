import {BaseCollectionPaginationCountResponse, EducationAssignmentResource} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationAssignmentResourceCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EducationAssignmentResource[];
}
