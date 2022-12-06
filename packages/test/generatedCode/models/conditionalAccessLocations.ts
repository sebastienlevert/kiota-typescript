import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessLocations extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Location IDs excluded from scope of policy. */
    excludeLocations?: string[];
    /** Location IDs in scope of policy unless explicitly excluded, All, or AllTrusted. */
    includeLocations?: string[];
    /** The OdataType property */
    odataType?: string;
}
