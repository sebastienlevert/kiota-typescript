import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OmaSetting extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Description. */
    description?: string;
    /** Display Name. */
    displayName?: string;
    /** The OdataType property */
    odataType?: string;
    /** OMA. */
    omaUri?: string;
}
