import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Identity extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The display name of the identity. Note that this might not always be available or up to date. For example, if a user changes their display name, the API might show the new value in a future response, but the items associated with the user won't show up as having changed when using delta. */
    displayName?: string;
    /** Unique identifier for the identity. */
    id?: string;
    /** The OdataType property */
    odataType?: string;
}
