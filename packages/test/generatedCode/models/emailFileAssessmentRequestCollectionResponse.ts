import {BaseCollectionPaginationCountResponse, EmailFileAssessmentRequest} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EmailFileAssessmentRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EmailFileAssessmentRequest[];
}
