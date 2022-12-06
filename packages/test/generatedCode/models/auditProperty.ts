import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AuditProperty extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Display name. */
    displayName?: string;
    /** New value. */
    newValue?: string;
    /** The OdataType property */
    odataType?: string;
    /** Old value. */
    oldValue?: string;
}
