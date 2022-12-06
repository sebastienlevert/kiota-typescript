import {BaseCollectionPaginationCountResponse, ThreatAssessmentResult} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ThreatAssessmentResultCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ThreatAssessmentResult[];
}
