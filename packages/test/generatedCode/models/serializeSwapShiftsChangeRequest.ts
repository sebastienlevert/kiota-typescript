import {SwapShiftsChangeRequest} from './index';
import {serializeOfferShiftRequest} from './serializeOfferShiftRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSwapShiftsChangeRequest(writer: SerializationWriter, swapShiftsChangeRequest: SwapShiftsChangeRequest | undefined = {}) : void {
        serializeOfferShiftRequest(writer, swapShiftsChangeRequest)
            writer.writeStringValue("recipientShiftId", swapShiftsChangeRequest.recipientShiftId);
}
