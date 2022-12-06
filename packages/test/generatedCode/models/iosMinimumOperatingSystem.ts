import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IosMinimumOperatingSystem extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The OdataType property */
    odataType?: string;
    /** Version 10.0 or later. */
    v10_0?: boolean;
    /** Version 11.0 or later. */
    v11_0?: boolean;
    /** Version 12.0 or later. */
    v12_0?: boolean;
    /** Version 13.0 or later. */
    v13_0?: boolean;
    /** Version 14.0 or later. */
    v14_0?: boolean;
    /** Version 8.0 or later. */
    v8_0?: boolean;
    /** Version 9.0 or later. */
    v9_0?: boolean;
}
