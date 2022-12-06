import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TeamGuestSettings extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** If set to true, guests can add and update channels. */
    allowCreateUpdateChannels?: boolean;
    /** If set to true, guests can delete channels. */
    allowDeleteChannels?: boolean;
    /** The OdataType property */
    odataType?: string;
}
