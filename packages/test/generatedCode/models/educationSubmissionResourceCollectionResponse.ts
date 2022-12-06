import {BaseCollectionPaginationCountResponse, EducationSubmissionResource} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationSubmissionResourceCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EducationSubmissionResource[];
}
