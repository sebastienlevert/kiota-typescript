import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AudioConferencing extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The conference id of the online meeting. */
    conferenceId?: string;
    /** A URL to the externally-accessible web page that contains dial-in information. */
    dialinUrl?: string;
    /** The tollFreeNumber property */
    tollFreeNumber?: string;
    /** List of toll-free numbers that are displayed in the meeting invite. */
    tollFreeNumbers?: string[];
    /** The tollNumber property */
    tollNumber?: string;
    /** List of toll numbers that are displayed in the meeting invite. */
    tollNumbers?: string[];
}
