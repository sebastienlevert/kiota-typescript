import {FileAssessmentRequest} from './index';
import {serializeThreatAssessmentRequest} from './serializeThreatAssessmentRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFileAssessmentRequest(writer: SerializationWriter, fileAssessmentRequest: FileAssessmentRequest | undefined = {}) : void {
        serializeThreatAssessmentRequest(writer, fileAssessmentRequest)
            writer.writeStringValue("contentData", fileAssessmentRequest.contentData);
            writer.writeStringValue("fileName", fileAssessmentRequest.fileName);
}
