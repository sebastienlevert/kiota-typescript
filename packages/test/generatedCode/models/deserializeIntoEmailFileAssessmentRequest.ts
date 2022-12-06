import {deserializeIntoThreatAssessmentRequest} from './deserializeIntoThreatAssessmentRequest';
import {EmailFileAssessmentRequest} from './index';
import {MailDestinationRoutingReason} from './mailDestinationRoutingReason';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEmailFileAssessmentRequest(emailFileAssessmentRequest: EmailFileAssessmentRequest | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoThreatAssessmentRequest(emailFileAssessmentRequest),
        "contentData": n => { emailFileAssessmentRequest.contentData = n.getStringValue() as any ; },
        "destinationRoutingReason": n => { emailFileAssessmentRequest.destinationRoutingReason = n.getEnumValue<MailDestinationRoutingReason>(MailDestinationRoutingReason) as any ; },
        "recipientEmail": n => { emailFileAssessmentRequest.recipientEmail = n.getStringValue() as any ; },
    }
}
