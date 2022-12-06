import {deserializeIntoScheduleChangeRequest} from './deserializeIntoScheduleChangeRequest';
import {OfferShiftRequest} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOfferShiftRequest(offerShiftRequest: OfferShiftRequest | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoScheduleChangeRequest(offerShiftRequest),
        "recipientActionDateTime": n => { offerShiftRequest.recipientActionDateTime = n.getDateValue() as any ; },
        "recipientActionMessage": n => { offerShiftRequest.recipientActionMessage = n.getStringValue() as any ; },
        "recipientUserId": n => { offerShiftRequest.recipientUserId = n.getStringValue() as any ; },
        "senderShiftId": n => { offerShiftRequest.senderShiftId = n.getStringValue() as any ; },
    }
}
