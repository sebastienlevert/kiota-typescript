import {UrlAssessmentRequest} from './index';
import {serializeThreatAssessmentRequest} from './serializeThreatAssessmentRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUrlAssessmentRequest(writer: SerializationWriter, urlAssessmentRequest: UrlAssessmentRequest | undefined = {}) : void {
        serializeThreatAssessmentRequest(writer, urlAssessmentRequest)
            writer.writeStringValue("url", urlAssessmentRequest.url);
}
