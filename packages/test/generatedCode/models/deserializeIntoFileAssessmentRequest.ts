import {deserializeIntoThreatAssessmentRequest} from './deserializeIntoThreatAssessmentRequest';
import {FileAssessmentRequest} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFileAssessmentRequest(fileAssessmentRequest: FileAssessmentRequest | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoThreatAssessmentRequest(fileAssessmentRequest),
        "contentData": n => { fileAssessmentRequest.contentData = n.getStringValue() as any ; },
        "fileName": n => { fileAssessmentRequest.fileName = n.getStringValue() as any ; },
    }
}
