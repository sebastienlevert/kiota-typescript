import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SecurityVendorInformation extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The OdataType property */
    odataType?: string;
    /** Specific provider (product/service - not vendor company); for example, WindowsDefenderATP. */
    provider?: string;
    /** Version of the provider or subprovider, if it exists, that generated the alert. Required */
    providerVersion?: string;
    /** Specific subprovider (under aggregating provider); for example, WindowsDefenderATP.SmartScreen. */
    subProvider?: string;
    /** Name of the alert vendor (for example, Microsoft, Dell, FireEye). Required */
    vendor?: string;
}
