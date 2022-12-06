import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TimeZoneInformation extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** An identifier for the time zone. */
    alias?: string;
    /** A display string that represents the time zone. */
    displayName?: string;
    /** The OdataType property */
    odataType?: string;
}
