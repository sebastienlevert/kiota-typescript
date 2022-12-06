import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface VppLicensingType extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The OdataType property */
    odataType?: string;
    /** Whether the program supports the device licensing type. */
    supportsDeviceLicensing?: boolean;
    /** Whether the program supports the user licensing type. */
    supportsUserLicensing?: boolean;
}
