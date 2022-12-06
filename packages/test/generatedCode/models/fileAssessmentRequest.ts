import {ThreatAssessmentRequest} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface FileAssessmentRequest extends Partial<Parsable>, ThreatAssessmentRequest {
    /** Base64 encoded file content. The file content cannot fetch back because it isn't stored. */
    contentData?: string;
    /** The file name. */
    fileName?: string;
}
