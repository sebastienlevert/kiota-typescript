import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AgreementFileData extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Data that represents the terms of use PDF document. Read-only. */
    data?: string;
    /** The OdataType property */
    odataType?: string;
}
