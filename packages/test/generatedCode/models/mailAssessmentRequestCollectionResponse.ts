import {BaseCollectionPaginationCountResponse, MailAssessmentRequest} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MailAssessmentRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MailAssessmentRequest[];
}
