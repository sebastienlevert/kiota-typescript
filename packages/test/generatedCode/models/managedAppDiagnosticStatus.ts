import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppDiagnosticStatus extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Instruction on how to mitigate a failed validation */
    mitigationInstruction?: string;
    /** The OdataType property */
    odataType?: string;
    /** The state of the operation */
    state?: string;
    /** The validation friendly name */
    validationName?: string;
}
