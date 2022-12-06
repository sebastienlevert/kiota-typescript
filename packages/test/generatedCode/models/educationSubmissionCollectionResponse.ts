import {BaseCollectionPaginationCountResponse, EducationSubmission} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationSubmissionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EducationSubmission[];
}
