import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceOperatingSystemSummary extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The count of Corporate work profile Android devices. Also known as Corporate Owned Personally Enabled (COPE). Valid values -1 to 2147483647 */
    androidCorporateWorkProfileCount?: number;
    /** Number of android device count. */
    androidCount?: number;
    /** Number of dedicated Android devices. */
    androidDedicatedCount?: number;
    /** Number of device admin Android devices. */
    androidDeviceAdminCount?: number;
    /** Number of fully managed Android devices. */
    androidFullyManagedCount?: number;
    /** Number of work profile Android devices. */
    androidWorkProfileCount?: number;
    /** Number of ConfigMgr managed devices. */
    configMgrDeviceCount?: number;
    /** Number of iOS device count. */
    iosCount?: number;
    /** Number of Mac OS X device count. */
    macOSCount?: number;
    /** The OdataType property */
    odataType?: string;
    /** Number of unknown device count. */
    unknownCount?: number;
    /** Number of Windows device count. */
    windowsCount?: number;
    /** Number of Windows mobile device count. */
    windowsMobileCount?: number;
}
