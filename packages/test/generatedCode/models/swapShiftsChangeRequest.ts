import {OfferShiftRequest} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SwapShiftsChangeRequest extends OfferShiftRequest, Partial<Parsable> {
    /** Shift ID for the recipient user with whom the request is to swap. */
    recipientShiftId?: string;
}
