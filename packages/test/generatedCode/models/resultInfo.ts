import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ResultInfo extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The result code. */
    code?: number;
    /** The message. */
    message?: string;
    /** The OdataType property */
    odataType?: string;
    /** The result sub-code. */
    subcode?: number;
}
