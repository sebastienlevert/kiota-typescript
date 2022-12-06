import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PhysicalAddress extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The city. */
    city?: string;
    /** The country or region. It's a free-format string value, for example, 'United States'. */
    countryOrRegion?: string;
    /** The OdataType property */
    odataType?: string;
    /** The postal code. */
    postalCode?: string;
    /** The state. */
    state?: string;
    /** The street. */
    street?: string;
}
