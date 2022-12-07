import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ChromeOSDeviceProperty extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Name of the property */
    name?: string;
    /** Whether this property is updatable */
    updatable?: boolean;
    /** Value of the property */
    value?: string;
    /** Type of the value */
    valueType?: string;
}
