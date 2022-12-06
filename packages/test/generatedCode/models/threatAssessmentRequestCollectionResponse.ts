import {BaseCollectionPaginationCountResponse, ThreatAssessmentRequest} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ThreatAssessmentRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ThreatAssessmentRequest[];
}
