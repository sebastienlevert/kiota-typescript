import {ThreatAssessmentRequest} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UrlAssessmentRequest extends Partial<Parsable>, ThreatAssessmentRequest {
    /** The URL string. */
    url?: string;
}
