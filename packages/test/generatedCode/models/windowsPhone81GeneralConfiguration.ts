import {AppListType} from './appListType';
import {AppListItem, DeviceConfiguration} from './index';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsPhone81GeneralConfiguration extends DeviceConfiguration, Partial<Parsable> {
    /** Value indicating whether this policy only applies to Windows Phone 8.1. This property is read-only. */
    applyOnlyToWindowsPhone81?: boolean;
    /** Indicates whether or not to block copy paste. */
    appsBlockCopyPaste?: boolean;
    /** Indicates whether or not to block bluetooth. */
    bluetoothBlocked?: boolean;
    /** Indicates whether or not to block camera. */
    cameraBlocked?: boolean;
    /** Indicates whether or not to block Wi-Fi tethering. Has no impact if Wi-Fi is blocked. */
    cellularBlockWifiTethering?: boolean;
    /** Possible values of the compliance app list. */
    compliantAppListType?: AppListType;
    /** List of apps in the compliance (either allow list or block list, controlled by CompliantAppListType). This collection can contain a maximum of 10000 elements. */
    compliantAppsList?: AppListItem[];
    /** Indicates whether or not to block diagnostic data submission. */
    diagnosticDataBlockSubmission?: boolean;
    /** Indicates whether or not to block custom email accounts. */
    emailBlockAddingAccounts?: boolean;
    /** Indicates whether or not to block location services. */
    locationServicesBlocked?: boolean;
    /** Indicates whether or not to block using a Microsoft Account. */
    microsoftAccountBlocked?: boolean;
    /** Indicates whether or not to block Near-Field Communication. */
    nfcBlocked?: boolean;
    /** Indicates whether or not to block syncing the calendar. */
    passwordBlockSimple?: boolean;
    /** Number of days before the password expires. */
    passwordExpirationDays?: number;
    /** Number of character sets a password must contain. */
    passwordMinimumCharacterSetCount?: number;
    /** Minimum length of passwords. */
    passwordMinimumLength?: number;
    /** Minutes of inactivity before screen timeout. */
    passwordMinutesOfInactivityBeforeScreenTimeout?: number;
    /** Number of previous passwords to block. Valid values 0 to 24 */
    passwordPreviousPasswordBlockCount?: number;
    /** Indicates whether or not to require a password. */
    passwordRequired?: boolean;
    /** Possible values of required passwords. */
    passwordRequiredType?: RequiredPasswordType;
    /** Number of sign in failures allowed before factory reset. */
    passwordSignInFailureCountBeforeFactoryReset?: number;
    /** Indicates whether or not to block screenshots. */
    screenCaptureBlocked?: boolean;
    /** Indicates whether or not to block removable storage. */
    storageBlockRemovableStorage?: boolean;
    /** Indicates whether or not to require encryption. */
    storageRequireEncryption?: boolean;
    /** Indicates whether or not to block the web browser. */
    webBrowserBlocked?: boolean;
    /** Indicates whether or not to block automatically connecting to Wi-Fi hotspots. Has no impact if Wi-Fi is blocked. */
    wifiBlockAutomaticConnectHotspots?: boolean;
    /** Indicates whether or not to block Wi-Fi. */
    wifiBlocked?: boolean;
    /** Indicates whether or not to block Wi-Fi hotspot reporting. Has no impact if Wi-Fi is blocked. */
    wifiBlockHotspotReporting?: boolean;
    /** Indicates whether or not to block the Windows Store. */
    windowsStoreBlocked?: boolean;
}
