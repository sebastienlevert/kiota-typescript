import {Win32LobAppMsiPackageType} from './win32LobAppMsiPackageType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Win32LobAppMsiInformation extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The OdataType property */
    odataType?: string;
    /** Indicates the package type of an MSI Win32LobApp. */
    packageType?: Win32LobAppMsiPackageType;
    /** The MSI product code. */
    productCode?: string;
    /** The MSI product name. */
    productName?: string;
    /** The MSI product version. */
    productVersion?: string;
    /** The MSI publisher. */
    publisher?: string;
    /** Whether the MSI app requires the machine to reboot to complete installation. */
    requiresReboot?: boolean;
    /** The MSI upgrade code. */
    upgradeCode?: string;
}
