import {OfferShiftRequest} from './index';
import {serializeScheduleChangeRequest} from './serializeScheduleChangeRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOfferShiftRequest(writer: SerializationWriter, offerShiftRequest: OfferShiftRequest | undefined = {}) : void {
        serializeScheduleChangeRequest(writer, offerShiftRequest)
            writer.writeDateValue("recipientActionDateTime", offerShiftRequest.recipientActionDateTime);
            writer.writeStringValue("recipientActionMessage", offerShiftRequest.recipientActionMessage);
            writer.writeStringValue("recipientUserId", offerShiftRequest.recipientUserId);
            writer.writeStringValue("senderShiftId", offerShiftRequest.senderShiftId);
}
