import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AlteredQueryToken extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Defines the length of a changed segment. */
    length?: number;
    /** The OdataType property */
    odataType?: string;
    /** Defines the offset of a changed segment. */
    offset?: number;
    /** Represents the corrected segment string. */
    suggestion?: string;
}
