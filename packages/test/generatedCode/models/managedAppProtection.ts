import {ManagedAppPolicy} from './index';
import {ManagedAppClipboardSharingLevel} from './managedAppClipboardSharingLevel';
import {ManagedAppDataStorageLocation} from './managedAppDataStorageLocation';
import {ManagedAppDataTransferLevel} from './managedAppDataTransferLevel';
import {ManagedAppPinCharacterSet} from './managedAppPinCharacterSet';
import {ManagedBrowserType} from './managedBrowserType';
import {Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppProtection extends ManagedAppPolicy, Partial<Parsable> {
    /** Data storage locations where a user may store managed data. */
    allowedDataStorageLocations?: ManagedAppDataStorageLocation[];
    /** Data can be transferred from/to these classes of apps */
    allowedInboundDataTransferSources?: ManagedAppDataTransferLevel;
    /** Represents the level to which the device's clipboard may be shared between apps */
    allowedOutboundClipboardSharingLevel?: ManagedAppClipboardSharingLevel;
    /** Data can be transferred from/to these classes of apps */
    allowedOutboundDataTransferDestinations?: ManagedAppDataTransferLevel;
    /** Indicates whether contacts can be synced to the user's device. */
    contactSyncBlocked?: boolean;
    /** Indicates whether the backup of a managed app's data is blocked. */
    dataBackupBlocked?: boolean;
    /** Indicates whether device compliance is required. */
    deviceComplianceRequired?: boolean;
    /** Indicates whether use of the app pin is required if the device pin is set. */
    disableAppPinIfDevicePinIsSet?: boolean;
    /** Indicates whether use of the fingerprint reader is allowed in place of a pin if PinRequired is set to True. */
    fingerprintBlocked?: boolean;
    /** Type of managed browser */
    managedBrowser?: ManagedBrowserType;
    /** Indicates whether internet links should be opened in the managed browser app, or any custom browser specified by CustomBrowserProtocol (for iOS) or CustomBrowserPackageId/CustomBrowserDisplayName (for Android) */
    managedBrowserToOpenLinksRequired?: boolean;
    /** Maximum number of incorrect pin retry attempts before the managed app is either blocked or wiped. */
    maximumPinRetries?: number;
    /** Minimum pin length required for an app-level pin if PinRequired is set to True */
    minimumPinLength?: number;
    /** Versions less than the specified version will block the managed app from accessing company data. */
    minimumRequiredAppVersion?: string;
    /** Versions less than the specified version will block the managed app from accessing company data. */
    minimumRequiredOsVersion?: string;
    /** Versions less than the specified version will result in warning message on the managed app. */
    minimumWarningAppVersion?: string;
    /** Versions less than the specified version will result in warning message on the managed app from accessing company data. */
    minimumWarningOsVersion?: string;
    /** Indicates whether organizational credentials are required for app use. */
    organizationalCredentialsRequired?: boolean;
    /** TimePeriod before the all-level pin must be reset if PinRequired is set to True. */
    periodBeforePinReset?: Duration;
    /** The period after which access is checked when the device is not connected to the internet. */
    periodOfflineBeforeAccessCheck?: Duration;
    /** The amount of time an app is allowed to remain disconnected from the internet before all managed data it is wiped. */
    periodOfflineBeforeWipeIsEnforced?: Duration;
    /** The period after which access is checked when the device is connected to the internet. */
    periodOnlineBeforeAccessCheck?: Duration;
    /** Character set which is to be used for a user's app PIN */
    pinCharacterSet?: ManagedAppPinCharacterSet;
    /** Indicates whether an app-level pin is required. */
    pinRequired?: boolean;
    /** Indicates whether printing is allowed from managed apps. */
    printBlocked?: boolean;
    /** Indicates whether users may use the 'Save As' menu item to save a copy of protected files. */
    saveAsBlocked?: boolean;
    /** Indicates whether simplePin is blocked. */
    simplePinBlocked?: boolean;
}
