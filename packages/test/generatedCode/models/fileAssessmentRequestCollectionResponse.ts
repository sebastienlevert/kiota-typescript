import {BaseCollectionPaginationCountResponse, FileAssessmentRequest} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface FileAssessmentRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: FileAssessmentRequest[];
}
