import {Phone} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OnlineMeetingInfo extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The ID of the conference. */
    conferenceId?: string;
    /** The external link that launches the online meeting. This is a URL that clients will launch into a browser and will redirect the user to join the meeting. */
    joinUrl?: string;
    /** All of the phone numbers associated with this conference. */
    phones?: Phone[];
    /** The pre-formatted quickdial for this call. */
    quickDial?: string;
    /** The toll free numbers that can be used to join the conference. */
    tollFreeNumbers?: string[];
    /** The toll number that can be used to join the conference. */
    tollNumber?: string;
}
