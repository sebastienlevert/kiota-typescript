import {deserializeIntoThreatAssessmentRequest} from './deserializeIntoThreatAssessmentRequest';
import {MailAssessmentRequest} from './index';
import {MailDestinationRoutingReason} from './mailDestinationRoutingReason';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMailAssessmentRequest(mailAssessmentRequest: MailAssessmentRequest | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoThreatAssessmentRequest(mailAssessmentRequest),
        "destinationRoutingReason": n => { mailAssessmentRequest.destinationRoutingReason = n.getEnumValue<MailDestinationRoutingReason>(MailDestinationRoutingReason) as any ; },
        "messageUri": n => { mailAssessmentRequest.messageUri = n.getStringValue() as any ; },
        "recipientEmail": n => { mailAssessmentRequest.recipientEmail = n.getStringValue() as any ; },
    }
}
