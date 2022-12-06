import {BaseCollectionPaginationCountResponse, UrlAssessmentRequest} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UrlAssessmentRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UrlAssessmentRequest[];
}
