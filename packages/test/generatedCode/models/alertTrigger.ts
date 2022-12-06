import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AlertTrigger extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Name of the property serving as a detection trigger. */
    name?: string;
    /** The OdataType property */
    odataType?: string;
    /** Type of the property in the key:value pair for interpretation. For example, String, Boolean etc. */
    type?: string;
    /** Value of the property serving as a detection trigger. */
    value?: string;
}
