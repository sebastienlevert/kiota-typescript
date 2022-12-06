import {AndroidRequiredPasswordType} from './androidRequiredPasswordType';
import {AppListType} from './appListType';
import {AppListItem, DeviceConfiguration} from './index';
import {WebBrowserCookieSettings} from './webBrowserCookieSettings';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AndroidGeneralDeviceConfiguration extends DeviceConfiguration, Partial<Parsable> {
    /** Indicates whether or not to block clipboard sharing to copy and paste between applications. */
    appsBlockClipboardSharing?: boolean;
    /** Indicates whether or not to block copy and paste within applications. */
    appsBlockCopyPaste?: boolean;
    /** Indicates whether or not to block the YouTube app. */
    appsBlockYouTube?: boolean;
    /** List of apps to be hidden on the KNOX device. This collection can contain a maximum of 500 elements. */
    appsHideList?: AppListItem[];
    /** List of apps which can be installed on the KNOX device. This collection can contain a maximum of 500 elements. */
    appsInstallAllowList?: AppListItem[];
    /** List of apps which are blocked from being launched on the KNOX device. This collection can contain a maximum of 500 elements. */
    appsLaunchBlockList?: AppListItem[];
    /** Indicates whether or not to block Bluetooth. */
    bluetoothBlocked?: boolean;
    /** Indicates whether or not to block the use of the camera. */
    cameraBlocked?: boolean;
    /** Indicates whether or not to block data roaming. */
    cellularBlockDataRoaming?: boolean;
    /** Indicates whether or not to block SMS/MMS messaging. */
    cellularBlockMessaging?: boolean;
    /** Indicates whether or not to block voice roaming. */
    cellularBlockVoiceRoaming?: boolean;
    /** Indicates whether or not to block syncing Wi-Fi tethering. */
    cellularBlockWiFiTethering?: boolean;
    /** Possible values of the compliance app list. */
    compliantAppListType?: AppListType;
    /** List of apps in the compliance (either allow list or block list, controlled by CompliantAppListType). This collection can contain a maximum of 10000 elements. */
    compliantAppsList?: AppListItem[];
    /** Indicates whether or not to allow device sharing mode. */
    deviceSharingAllowed?: boolean;
    /** Indicates whether or not to block diagnostic data submission. */
    diagnosticDataBlockSubmission?: boolean;
    /** Indicates whether or not to block user performing a factory reset. */
    factoryResetBlocked?: boolean;
    /** Indicates whether or not to block Google account auto sync. */
    googleAccountBlockAutoSync?: boolean;
    /** Indicates whether or not to block the Google Play store. */
    googlePlayStoreBlocked?: boolean;
    /** A list of apps that will be allowed to run when the device is in Kiosk Mode. This collection can contain a maximum of 500 elements. */
    kioskModeApps?: AppListItem[];
    /** Indicates whether or not to block the screen sleep button while in Kiosk Mode. */
    kioskModeBlockSleepButton?: boolean;
    /** Indicates whether or not to block the volume buttons while in Kiosk Mode. */
    kioskModeBlockVolumeButtons?: boolean;
    /** Indicates whether or not to block location services. */
    locationServicesBlocked?: boolean;
    /** Indicates whether or not to block Near-Field Communication. */
    nfcBlocked?: boolean;
    /** Indicates whether or not to block fingerprint unlock. */
    passwordBlockFingerprintUnlock?: boolean;
    /** Indicates whether or not to block Smart Lock and other trust agents. */
    passwordBlockTrustAgents?: boolean;
    /** Number of days before the password expires. Valid values 1 to 365 */
    passwordExpirationDays?: number;
    /** Minimum length of passwords. Valid values 4 to 16 */
    passwordMinimumLength?: number;
    /** Minutes of inactivity before the screen times out. */
    passwordMinutesOfInactivityBeforeScreenTimeout?: number;
    /** Number of previous passwords to block. Valid values 0 to 24 */
    passwordPreviousPasswordBlockCount?: number;
    /** Indicates whether or not to require a password. */
    passwordRequired?: boolean;
    /** Android required password type. */
    passwordRequiredType?: AndroidRequiredPasswordType;
    /** Number of sign in failures allowed before factory reset. Valid values 1 to 16 */
    passwordSignInFailureCountBeforeFactoryReset?: number;
    /** Indicates whether or not to block powering off the device. */
    powerOffBlocked?: boolean;
    /** Indicates whether or not to block screenshots. */
    screenCaptureBlocked?: boolean;
    /** Require the Android Verify apps feature is turned on. */
    securityRequireVerifyApps?: boolean;
    /** Indicates whether or not to block Google Backup. */
    storageBlockGoogleBackup?: boolean;
    /** Indicates whether or not to block removable storage usage. */
    storageBlockRemovableStorage?: boolean;
    /** Indicates whether or not to require device encryption. */
    storageRequireDeviceEncryption?: boolean;
    /** Indicates whether or not to require removable storage encryption. */
    storageRequireRemovableStorageEncryption?: boolean;
    /** Indicates whether or not to block the use of the Voice Assistant. */
    voiceAssistantBlocked?: boolean;
    /** Indicates whether or not to block voice dialing. */
    voiceDialingBlocked?: boolean;
    /** Indicates whether or not to block the web browser's auto fill feature. */
    webBrowserBlockAutofill?: boolean;
    /** Indicates whether or not to block the web browser. */
    webBrowserBlocked?: boolean;
    /** Indicates whether or not to block JavaScript within the web browser. */
    webBrowserBlockJavaScript?: boolean;
    /** Indicates whether or not to block popups within the web browser. */
    webBrowserBlockPopups?: boolean;
    /** Web Browser Cookie Settings. */
    webBrowserCookieSettings?: WebBrowserCookieSettings;
    /** Indicates whether or not to block syncing Wi-Fi. */
    wiFiBlocked?: boolean;
}
