import {MailAssessmentRequest} from './index';
import {MailDestinationRoutingReason} from './mailDestinationRoutingReason';
import {serializeThreatAssessmentRequest} from './serializeThreatAssessmentRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMailAssessmentRequest(writer: SerializationWriter, mailAssessmentRequest: MailAssessmentRequest | undefined = {}) : void {
        serializeThreatAssessmentRequest(writer, mailAssessmentRequest)
            writer.writeEnumValue<MailDestinationRoutingReason>("destinationRoutingReason", mailAssessmentRequest.destinationRoutingReason);
            writer.writeStringValue("messageUri", mailAssessmentRequest.messageUri);
            writer.writeStringValue("recipientEmail", mailAssessmentRequest.recipientEmail);
}
