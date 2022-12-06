import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ControlScore extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Control action category (Identity, Data, Device, Apps, Infrastructure). */
    controlCategory?: string;
    /** Control unique name. */
    controlName?: string;
    /** Description of the control. */
    description?: string;
    /** The OdataType property */
    odataType?: string;
    /** Tenant achieved score for the control (it varies day by day depending on tenant operations on the control). */
    score?: number;
}
