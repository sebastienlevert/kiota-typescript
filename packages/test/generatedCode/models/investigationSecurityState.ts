import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface InvestigationSecurityState extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The name property */
    name?: string;
    /** The OdataType property */
    odataType?: string;
    /** The status property */
    status?: string;
}
