import {BaseCollectionPaginationCountResponse, EducationAssignment} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EducationAssignment[];
}
