import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AndroidMinimumOperatingSystem extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The OdataType property */
    odataType?: string;
    /** Version 10.0 or later. */
    v10_0?: boolean;
    /** Version 11.0 or later. */
    v11_0?: boolean;
    /** Version 4.0 or later. */
    v4_0?: boolean;
    /** Version 4.0.3 or later. */
    v4_0_3?: boolean;
    /** Version 4.1 or later. */
    v4_1?: boolean;
    /** Version 4.2 or later. */
    v4_2?: boolean;
    /** Version 4.3 or later. */
    v4_3?: boolean;
    /** Version 4.4 or later. */
    v4_4?: boolean;
    /** Version 5.0 or later. */
    v5_0?: boolean;
    /** Version 5.1 or later. */
    v5_1?: boolean;
    /** Version 6.0 or later. */
    v6_0?: boolean;
    /** Version 7.0 or later. */
    v7_0?: boolean;
    /** Version 7.1 or later. */
    v7_1?: boolean;
    /** Version 8.0 or later. */
    v8_0?: boolean;
    /** Version 8.1 or later. */
    v8_1?: boolean;
    /** Version 9.0 or later. */
    v9_0?: boolean;
}
