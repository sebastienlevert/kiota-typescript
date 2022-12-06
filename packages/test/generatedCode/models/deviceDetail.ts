import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceDetail extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Indicates the browser information of the used for signing in. */
    browser?: string;
    /** Refers to the UniqueID of the device used for signing in. */
    deviceId?: string;
    /** Refers to the name of the device used for signing in. */
    displayName?: string;
    /** Indicates whether the device is compliant. */
    isCompliant?: boolean;
    /** Indicates whether the device is managed. */
    isManaged?: boolean;
    /** The OdataType property */
    odataType?: string;
    /** Indicates the operating system name and version used for signing in. */
    operatingSystem?: string;
    /** Provides information about whether the signed-in device is Workplace Joined, AzureAD Joined, Domain Joined. */
    trustType?: string;
}
