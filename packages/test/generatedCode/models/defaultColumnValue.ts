import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DefaultColumnValue extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The formula used to compute the default value for this column. */
    formula?: string;
    /** The OdataType property */
    odataType?: string;
    /** The direct value to use as the default value for this column. */
    value?: string;
}
