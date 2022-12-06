import {deserializeIntoThreatAssessmentRequest} from './deserializeIntoThreatAssessmentRequest';
import {UrlAssessmentRequest} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUrlAssessmentRequest(urlAssessmentRequest: UrlAssessmentRequest | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoThreatAssessmentRequest(urlAssessmentRequest),
        "url": n => { urlAssessmentRequest.url = n.getStringValue() as any ; },
    }
}
