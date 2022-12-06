import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RgbColor extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Blue value */
    b?: number;
    /** Green value */
    g?: number;
    /** The OdataType property */
    odataType?: string;
    /** Red value */
    r?: number;
}
