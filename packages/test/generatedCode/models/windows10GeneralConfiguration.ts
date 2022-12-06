import {DefenderCloudBlockLevelType} from './defenderCloudBlockLevelType';
import {DefenderMonitorFileActivity} from './defenderMonitorFileActivity';
import {DefenderPromptForSampleSubmission} from './defenderPromptForSampleSubmission';
import {DefenderScanType} from './defenderScanType';
import {DiagnosticDataSubmissionMode} from './diagnosticDataSubmissionMode';
import {EdgeCookiePolicy} from './edgeCookiePolicy';
import {DefenderDetectedMalwareActions, DeviceConfiguration, EdgeSearchEngineBase, Windows10NetworkProxyServer} from './index';
import {RequiredPasswordType} from './requiredPasswordType';
import {SafeSearchFilterType} from './safeSearchFilterType';
import {StateManagementSetting} from './stateManagementSetting';
import {VisibilitySetting} from './visibilitySetting';
import {WeeklySchedule} from './weeklySchedule';
import {WindowsSpotlightEnablementSettings} from './windowsSpotlightEnablementSettings';
import {WindowsStartMenuAppListVisibilityType} from './windowsStartMenuAppListVisibilityType';
import {WindowsStartMenuModeType} from './windowsStartMenuModeType';
import {Parsable, TimeOnly} from '@microsoft/kiota-abstractions';

export interface Windows10GeneralConfiguration extends DeviceConfiguration, Partial<Parsable> {
    /** Indicates whether or not to Block the user from adding email accounts to the device that are not associated with a Microsoft account. */
    accountsBlockAddingNonMicrosoftAccountEmail?: boolean;
    /** Indicates whether or not to block the user from selecting an AntiTheft mode preference (Windows 10 Mobile only). */
    antiTheftModeBlocked?: boolean;
    /** State Management Setting. */
    appsAllowTrustedAppsSideloading?: StateManagementSetting;
    /** Indicates whether or not to disable the launch of all apps from Windows Store that came pre-installed or were downloaded. */
    appsBlockWindowsStoreOriginatedApps?: boolean;
    /** Specify a list of allowed Bluetooth services and profiles in hex formatted strings. */
    bluetoothAllowedServices?: string[];
    /** Whether or not to Block the user from using bluetooth advertising. */
    bluetoothBlockAdvertising?: boolean;
    /** Whether or not to Block the user from using bluetooth discoverable mode. */
    bluetoothBlockDiscoverableMode?: boolean;
    /** Whether or not to Block the user from using bluetooth. */
    bluetoothBlocked?: boolean;
    /** Whether or not to block specific bundled Bluetooth peripherals to automatically pair with the host device. */
    bluetoothBlockPrePairing?: boolean;
    /** Whether or not to Block the user from accessing the camera of the device. */
    cameraBlocked?: boolean;
    /** Whether or not to Block the user from using data over cellular while roaming. */
    cellularBlockDataWhenRoaming?: boolean;
    /** Whether or not to Block the user from using VPN over cellular. */
    cellularBlockVpn?: boolean;
    /** Whether or not to Block the user from using VPN when roaming over cellular. */
    cellularBlockVpnWhenRoaming?: boolean;
    /** Whether or not to Block the user from doing manual root certificate installation. */
    certificatesBlockManualRootCertificateInstallation?: boolean;
    /** Whether or not to block Connected Devices Service which enables discovery and connection to other devices, remote messaging, remote app sessions and other cross-device experiences. */
    connectedDevicesServiceBlocked?: boolean;
    /** Whether or not to Block the user from using copy paste. */
    copyPasteBlocked?: boolean;
    /** Whether or not to Block the user from using Cortana. */
    cortanaBlocked?: boolean;
    /** Whether or not to block end user access to Defender. */
    defenderBlockEndUserAccess?: boolean;
    /** Possible values of Cloud Block Level */
    defenderCloudBlockLevel?: DefenderCloudBlockLevelType;
    /** Number of days before deleting quarantined malware. Valid values 0 to 90 */
    defenderDaysBeforeDeletingQuarantinedMalware?: number;
    /** Gets or sets Defender’s actions to take on detected Malware per threat level. */
    defenderDetectedMalwareActions?: DefenderDetectedMalwareActions;
    /** File extensions to exclude from scans and real time protection. */
    defenderFileExtensionsToExclude?: string[];
    /** Files and folder to exclude from scans and real time protection. */
    defenderFilesAndFoldersToExclude?: string[];
    /** Possible values for monitoring file activity. */
    defenderMonitorFileActivity?: DefenderMonitorFileActivity;
    /** Processes to exclude from scans and real time protection. */
    defenderProcessesToExclude?: string[];
    /** Possible values for prompting user for samples submission. */
    defenderPromptForSampleSubmission?: DefenderPromptForSampleSubmission;
    /** Indicates whether or not to require behavior monitoring. */
    defenderRequireBehaviorMonitoring?: boolean;
    /** Indicates whether or not to require cloud protection. */
    defenderRequireCloudProtection?: boolean;
    /** Indicates whether or not to require network inspection system. */
    defenderRequireNetworkInspectionSystem?: boolean;
    /** Indicates whether or not to require real time monitoring. */
    defenderRequireRealTimeMonitoring?: boolean;
    /** Indicates whether or not to scan archive files. */
    defenderScanArchiveFiles?: boolean;
    /** Indicates whether or not to scan downloads. */
    defenderScanDownloads?: boolean;
    /** Indicates whether or not to scan incoming mail messages. */
    defenderScanIncomingMail?: boolean;
    /** Indicates whether or not to scan mapped network drives during full scan. */
    defenderScanMappedNetworkDrivesDuringFullScan?: boolean;
    /** Max CPU usage percentage during scan. Valid values 0 to 100 */
    defenderScanMaxCpu?: number;
    /** Indicates whether or not to scan files opened from a network folder. */
    defenderScanNetworkFiles?: boolean;
    /** Indicates whether or not to scan removable drives during full scan. */
    defenderScanRemovableDrivesDuringFullScan?: boolean;
    /** Indicates whether or not to scan scripts loaded in Internet Explorer browser. */
    defenderScanScriptsLoadedInInternetExplorer?: boolean;
    /** Possible values for system scan type. */
    defenderScanType?: DefenderScanType;
    /** The time to perform a daily quick scan. */
    defenderScheduledQuickScanTime?: TimeOnly;
    /** The defender time for the system scan. */
    defenderScheduledScanTime?: TimeOnly;
    /** The signature update interval in hours. Specify 0 not to check. Valid values 0 to 24 */
    defenderSignatureUpdateIntervalInHours?: number;
    /** Possible values for a weekly schedule. */
    defenderSystemScanSchedule?: WeeklySchedule;
    /** State Management Setting. */
    developerUnlockSetting?: StateManagementSetting;
    /** Indicates whether or not to Block the user from resetting their phone. */
    deviceManagementBlockFactoryResetOnMobile?: boolean;
    /** Indicates whether or not to Block the user from doing manual un-enrollment from device management. */
    deviceManagementBlockManualUnenroll?: boolean;
    /** Allow the device to send diagnostic and usage telemetry data, such as Watson. */
    diagnosticsDataSubmissionMode?: DiagnosticDataSubmissionMode;
    /** Allow users to change Start pages on Edge. Use the EdgeHomepageUrls to specify the Start pages that the user would see by default when they open Edge. */
    edgeAllowStartPagesModification?: boolean;
    /** Indicates whether or not to prevent access to about flags on Edge browser. */
    edgeBlockAccessToAboutFlags?: boolean;
    /** Block the address bar dropdown functionality in Microsoft Edge. Disable this settings to minimize network connections from Microsoft Edge to Microsoft services. */
    edgeBlockAddressBarDropdown?: boolean;
    /** Indicates whether or not to block auto fill. */
    edgeBlockAutofill?: boolean;
    /** Block Microsoft compatibility list in Microsoft Edge. This list from Microsoft helps Edge properly display sites with known compatibility issues. */
    edgeBlockCompatibilityList?: boolean;
    /** Indicates whether or not to block developer tools in the Edge browser. */
    edgeBlockDeveloperTools?: boolean;
    /** Indicates whether or not to Block the user from using the Edge browser. */
    edgeBlocked?: boolean;
    /** Indicates whether or not to block extensions in the Edge browser. */
    edgeBlockExtensions?: boolean;
    /** Indicates whether or not to block InPrivate browsing on corporate networks, in the Edge browser. */
    edgeBlockInPrivateBrowsing?: boolean;
    /** Indicates whether or not to Block the user from using JavaScript. */
    edgeBlockJavaScript?: boolean;
    /** Block the collection of information by Microsoft for live tile creation when users pin a site to Start from Microsoft Edge. */
    edgeBlockLiveTileDataCollection?: boolean;
    /** Indicates whether or not to Block password manager. */
    edgeBlockPasswordManager?: boolean;
    /** Indicates whether or not to block popups. */
    edgeBlockPopups?: boolean;
    /** Indicates whether or not to block the user from using the search suggestions in the address bar. */
    edgeBlockSearchSuggestions?: boolean;
    /** Indicates whether or not to Block the user from sending the do not track header. */
    edgeBlockSendingDoNotTrackHeader?: boolean;
    /** Indicates whether or not to switch the intranet traffic from Edge to Internet Explorer. Note: the name of this property is misleading; the property is obsolete, use EdgeSendIntranetTrafficToInternetExplorer instead. */
    edgeBlockSendingIntranetTrafficToInternetExplorer?: boolean;
    /** Clear browsing data on exiting Microsoft Edge. */
    edgeClearBrowsingDataOnExit?: boolean;
    /** Possible values to specify which cookies are allowed in Microsoft Edge. */
    edgeCookiePolicy?: EdgeCookiePolicy;
    /** Block the Microsoft web page that opens on the first use of Microsoft Edge. This policy allows enterprises, like those enrolled in zero emissions configurations, to block this page. */
    edgeDisableFirstRunPage?: boolean;
    /** Indicates the enterprise mode site list location. Could be a local file, local network or http location. */
    edgeEnterpriseModeSiteListLocation?: string;
    /** The first run URL for when Edge browser is opened for the first time. */
    edgeFirstRunUrl?: string;
    /** The list of URLs for homepages shodwn on MDM-enrolled devices on Edge browser. */
    edgeHomepageUrls?: string[];
    /** Indicates whether or not to Require the user to use the smart screen filter. */
    edgeRequireSmartScreen?: boolean;
    /** Allows IT admins to set a default search engine for MDM-Controlled devices. Users can override this and change their default search engine provided the AllowSearchEngineCustomization policy is not set. */
    edgeSearchEngine?: EdgeSearchEngineBase;
    /** Indicates whether or not to switch the intranet traffic from Edge to Internet Explorer. */
    edgeSendIntranetTrafficToInternetExplorer?: boolean;
    /** Enable favorites sync between Internet Explorer and Microsoft Edge. Additions, deletions, modifications and order changes to favorites are shared between browsers. */
    edgeSyncFavoritesWithInternetExplorer?: boolean;
    /** Endpoint for discovering cloud printers. */
    enterpriseCloudPrintDiscoveryEndPoint?: string;
    /** Maximum number of printers that should be queried from a discovery endpoint. This is a mobile only setting. Valid values 1 to 65535 */
    enterpriseCloudPrintDiscoveryMaxLimit?: number;
    /** OAuth resource URI for printer discovery service as configured in Azure portal. */
    enterpriseCloudPrintMopriaDiscoveryResourceIdentifier?: string;
    /** Authentication endpoint for acquiring OAuth tokens. */
    enterpriseCloudPrintOAuthAuthority?: string;
    /** GUID of a client application authorized to retrieve OAuth tokens from the OAuth Authority. */
    enterpriseCloudPrintOAuthClientIdentifier?: string;
    /** OAuth resource URI for print service as configured in the Azure portal. */
    enterpriseCloudPrintResourceIdentifier?: string;
    /** Indicates whether or not to enable device discovery UX. */
    experienceBlockDeviceDiscovery?: boolean;
    /** Indicates whether or not to allow the error dialog from displaying if no SIM card is detected. */
    experienceBlockErrorDialogWhenNoSIM?: boolean;
    /** Indicates whether or not to enable task switching on the device. */
    experienceBlockTaskSwitcher?: boolean;
    /** Indicates whether or not to block DVR and broadcasting. */
    gameDvrBlocked?: boolean;
    /** Indicates whether or not to Block the user from using internet sharing. */
    internetSharingBlocked?: boolean;
    /** Indicates whether or not to Block the user from location services. */
    locationServicesBlocked?: boolean;
    /** Specify whether to show a user-configurable setting to control the screen timeout while on the lock screen of Windows 10 Mobile devices. If this policy is set to Allow, the value set by lockScreenTimeoutInSeconds is ignored. */
    lockScreenAllowTimeoutConfiguration?: boolean;
    /** Indicates whether or not to block action center notifications over lock screen. */
    lockScreenBlockActionCenterNotifications?: boolean;
    /** Indicates whether or not the user can interact with Cortana using speech while the system is locked. */
    lockScreenBlockCortana?: boolean;
    /** Indicates whether to allow toast notifications above the device lock screen. */
    lockScreenBlockToastNotifications?: boolean;
    /** Set the duration (in seconds) from the screen locking to the screen turning off for Windows 10 Mobile devices. Supported values are 11-1800. Valid values 11 to 1800 */
    lockScreenTimeoutInSeconds?: number;
    /** Disables the ability to quickly switch between users that are logged on simultaneously without logging off. */
    logonBlockFastUserSwitching?: boolean;
    /** Indicates whether or not to Block a Microsoft account. */
    microsoftAccountBlocked?: boolean;
    /** Indicates whether or not to Block Microsoft account settings sync. */
    microsoftAccountBlockSettingsSync?: boolean;
    /** If set, proxy settings will be applied to all processes and accounts in the device. Otherwise, it will be applied to the user account that’s enrolled into MDM. */
    networkProxyApplySettingsDeviceWide?: boolean;
    /** Address to the proxy auto-config (PAC) script you want to use. */
    networkProxyAutomaticConfigurationUrl?: string;
    /** Disable automatic detection of settings. If enabled, the system will try to find the path to a proxy auto-config (PAC) script. */
    networkProxyDisableAutoDetect?: boolean;
    /** Specifies manual proxy server settings. */
    networkProxyServer?: Windows10NetworkProxyServer;
    /** Indicates whether or not to Block the user from using near field communication. */
    nfcBlocked?: boolean;
    /** Gets or sets a value allowing IT admins to prevent apps and features from working with files on OneDrive. */
    oneDriveDisableFileSync?: boolean;
    /** Specify whether PINs or passwords such as '1111' or '1234' are allowed. For Windows 10 desktops, it also controls the use of picture passwords. */
    passwordBlockSimple?: boolean;
    /** The password expiration in days. Valid values 0 to 730 */
    passwordExpirationDays?: number;
    /** The number of character sets required in the password. */
    passwordMinimumCharacterSetCount?: number;
    /** The minimum password length. Valid values 4 to 16 */
    passwordMinimumLength?: number;
    /** The minutes of inactivity before the screen times out. */
    passwordMinutesOfInactivityBeforeScreenTimeout?: number;
    /** The number of previous passwords to prevent reuse of. Valid values 0 to 50 */
    passwordPreviousPasswordBlockCount?: number;
    /** Indicates whether or not to require the user to have a password. */
    passwordRequired?: boolean;
    /** Possible values of required passwords. */
    passwordRequiredType?: RequiredPasswordType;
    /** Indicates whether or not to require a password upon resuming from an idle state. */
    passwordRequireWhenResumeFromIdleState?: boolean;
    /** The number of sign in failures before factory reset. Valid values 0 to 999 */
    passwordSignInFailureCountBeforeFactoryReset?: number;
    /** A http or https Url to a jpg, jpeg or png image that needs to be downloaded and used as the Desktop Image or a file Url to a local image on the file system that needs to used as the Desktop Image. */
    personalizationDesktopImageUrl?: string;
    /** A http or https Url to a jpg, jpeg or png image that neeeds to be downloaded and used as the Lock Screen Image or a file Url to a local image on the file system that needs to be used as the Lock Screen Image. */
    personalizationLockScreenImageUrl?: string;
    /** State Management Setting. */
    privacyAdvertisingId?: StateManagementSetting;
    /** Indicates whether or not to allow the automatic acceptance of the pairing and privacy user consent dialog when launching apps. */
    privacyAutoAcceptPairingAndConsentPrompts?: boolean;
    /** Indicates whether or not to block the usage of cloud based speech services for Cortana, Dictation, or Store applications. */
    privacyBlockInputPersonalization?: boolean;
    /** Indicates whether or not to Block the user from reset protection mode. */
    resetProtectionModeBlocked?: boolean;
    /** Specifies what level of safe search (filtering adult content) is required */
    safeSearchFilter?: SafeSearchFilterType;
    /** Indicates whether or not to Block the user from taking Screenshots. */
    screenCaptureBlocked?: boolean;
    /** Specifies if search can use diacritics. */
    searchBlockDiacritics?: boolean;
    /** Specifies whether to use automatic language detection when indexing content and properties. */
    searchDisableAutoLanguageDetection?: boolean;
    /** Indicates whether or not to disable the search indexer backoff feature. */
    searchDisableIndexerBackoff?: boolean;
    /** Indicates whether or not to block indexing of WIP-protected items to prevent them from appearing in search results for Cortana or Explorer. */
    searchDisableIndexingEncryptedItems?: boolean;
    /** Indicates whether or not to allow users to add locations on removable drives to libraries and to be indexed. */
    searchDisableIndexingRemovableDrive?: boolean;
    /** Specifies minimum amount of hard drive space on the same drive as the index location before indexing stops. */
    searchEnableAutomaticIndexSizeManangement?: boolean;
    /** Indicates whether or not to block remote queries of this computer’s index. */
    searchEnableRemoteQueries?: boolean;
    /** Indicates whether or not to block access to Accounts in Settings app. */
    settingsBlockAccountsPage?: boolean;
    /** Indicates whether or not to block the user from installing provisioning packages. */
    settingsBlockAddProvisioningPackage?: boolean;
    /** Indicates whether or not to block access to Apps in Settings app. */
    settingsBlockAppsPage?: boolean;
    /** Indicates whether or not to block the user from changing the language settings. */
    settingsBlockChangeLanguage?: boolean;
    /** Indicates whether or not to block the user from changing power and sleep settings. */
    settingsBlockChangePowerSleep?: boolean;
    /** Indicates whether or not to block the user from changing the region settings. */
    settingsBlockChangeRegion?: boolean;
    /** Indicates whether or not to block the user from changing date and time settings. */
    settingsBlockChangeSystemTime?: boolean;
    /** Indicates whether or not to block access to Devices in Settings app. */
    settingsBlockDevicesPage?: boolean;
    /** Indicates whether or not to block access to Ease of Access in Settings app. */
    settingsBlockEaseOfAccessPage?: boolean;
    /** Indicates whether or not to block the user from editing the device name. */
    settingsBlockEditDeviceName?: boolean;
    /** Indicates whether or not to block access to Gaming in Settings app. */
    settingsBlockGamingPage?: boolean;
    /** Indicates whether or not to block access to Network & Internet in Settings app. */
    settingsBlockNetworkInternetPage?: boolean;
    /** Indicates whether or not to block access to Personalization in Settings app. */
    settingsBlockPersonalizationPage?: boolean;
    /** Indicates whether or not to block access to Privacy in Settings app. */
    settingsBlockPrivacyPage?: boolean;
    /** Indicates whether or not to block the runtime configuration agent from removing provisioning packages. */
    settingsBlockRemoveProvisioningPackage?: boolean;
    /** Indicates whether or not to block access to Settings app. */
    settingsBlockSettingsApp?: boolean;
    /** Indicates whether or not to block access to System in Settings app. */
    settingsBlockSystemPage?: boolean;
    /** Indicates whether or not to block access to Time & Language in Settings app. */
    settingsBlockTimeLanguagePage?: boolean;
    /** Indicates whether or not to block access to Update & Security in Settings app. */
    settingsBlockUpdateSecurityPage?: boolean;
    /** Indicates whether or not to block multiple users of the same app to share data. */
    sharedUserAppDataAllowed?: boolean;
    /** Indicates whether or not users can override SmartScreen Filter warnings about potentially malicious websites. */
    smartScreenBlockPromptOverride?: boolean;
    /** Indicates whether or not users can override the SmartScreen Filter warnings about downloading unverified files */
    smartScreenBlockPromptOverrideForFiles?: boolean;
    /** This property will be deprecated in July 2019 and will be replaced by property SmartScreenAppInstallControl. Allows IT Admins to control whether users are allowed to install apps from places other than the Store. */
    smartScreenEnableAppInstallControl?: boolean;
    /** Indicates whether or not to block the user from unpinning apps from taskbar. */
    startBlockUnpinningAppsFromTaskbar?: boolean;
    /** Type of start menu app list visibility. */
    startMenuAppListVisibility?: WindowsStartMenuAppListVisibilityType;
    /** Enabling this policy hides the change account setting from appearing in the user tile in the start menu. */
    startMenuHideChangeAccountSettings?: boolean;
    /** Enabling this policy hides the most used apps from appearing on the start menu and disables the corresponding toggle in the Settings app. */
    startMenuHideFrequentlyUsedApps?: boolean;
    /** Enabling this policy hides hibernate from appearing in the power button in the start menu. */
    startMenuHideHibernate?: boolean;
    /** Enabling this policy hides lock from appearing in the user tile in the start menu. */
    startMenuHideLock?: boolean;
    /** Enabling this policy hides the power button from appearing in the start menu. */
    startMenuHidePowerButton?: boolean;
    /** Enabling this policy hides recent jump lists from appearing on the start menu/taskbar and disables the corresponding toggle in the Settings app. */
    startMenuHideRecentJumpLists?: boolean;
    /** Enabling this policy hides recently added apps from appearing on the start menu and disables the corresponding toggle in the Settings app. */
    startMenuHideRecentlyAddedApps?: boolean;
    /** Enabling this policy hides 'Restart/Update and Restart' from appearing in the power button in the start menu. */
    startMenuHideRestartOptions?: boolean;
    /** Enabling this policy hides shut down/update and shut down from appearing in the power button in the start menu. */
    startMenuHideShutDown?: boolean;
    /** Enabling this policy hides sign out from appearing in the user tile in the start menu. */
    startMenuHideSignOut?: boolean;
    /** Enabling this policy hides sleep from appearing in the power button in the start menu. */
    startMenuHideSleep?: boolean;
    /** Enabling this policy hides switch account from appearing in the user tile in the start menu. */
    startMenuHideSwitchAccount?: boolean;
    /** Enabling this policy hides the user tile from appearing in the start menu. */
    startMenuHideUserTile?: boolean;
    /** This policy setting allows you to import Edge assets to be used with startMenuLayoutXml policy. Start layout can contain secondary tile from Edge app which looks for Edge local asset file. Edge local asset would not exist and cause Edge secondary tile to appear empty in this case. This policy only gets applied when startMenuLayoutXml policy is modified. The value should be a UTF-8 Base64 encoded byte array. */
    startMenuLayoutEdgeAssetsXml?: string;
    /** Allows admins to override the default Start menu layout and prevents the user from changing it. The layout is modified by specifying an XML file based on a layout modification schema. XML needs to be in a UTF8 encoded byte array format. */
    startMenuLayoutXml?: string;
    /** Type of display modes for the start menu. */
    startMenuMode?: WindowsStartMenuModeType;
    /** Generic visibility state. */
    startMenuPinnedFolderDocuments?: VisibilitySetting;
    /** Generic visibility state. */
    startMenuPinnedFolderDownloads?: VisibilitySetting;
    /** Generic visibility state. */
    startMenuPinnedFolderFileExplorer?: VisibilitySetting;
    /** Generic visibility state. */
    startMenuPinnedFolderHomeGroup?: VisibilitySetting;
    /** Generic visibility state. */
    startMenuPinnedFolderMusic?: VisibilitySetting;
    /** Generic visibility state. */
    startMenuPinnedFolderNetwork?: VisibilitySetting;
    /** Generic visibility state. */
    startMenuPinnedFolderPersonalFolder?: VisibilitySetting;
    /** Generic visibility state. */
    startMenuPinnedFolderPictures?: VisibilitySetting;
    /** Generic visibility state. */
    startMenuPinnedFolderSettings?: VisibilitySetting;
    /** Generic visibility state. */
    startMenuPinnedFolderVideos?: VisibilitySetting;
    /** Indicates whether or not to Block the user from using removable storage. */
    storageBlockRemovableStorage?: boolean;
    /** Indicating whether or not to require encryption on a mobile device. */
    storageRequireMobileDeviceEncryption?: boolean;
    /** Indicates whether application data is restricted to the system drive. */
    storageRestrictAppDataToSystemVolume?: boolean;
    /** Indicates whether the installation of applications is restricted to the system drive. */
    storageRestrictAppInstallToSystemVolume?: boolean;
    /** Whether the device is required to connect to the network. */
    tenantLockdownRequireNetworkDuringOutOfBoxExperience?: boolean;
    /** Indicates whether or not to Block the user from USB connection. */
    usbBlocked?: boolean;
    /** Indicates whether or not to Block the user from voice recording. */
    voiceRecordingBlocked?: boolean;
    /** Indicates whether or not user's localhost IP address is displayed while making phone calls using the WebRTC */
    webRtcBlockLocalhostIpAddress?: boolean;
    /** Indicating whether or not to block automatically connecting to Wi-Fi hotspots. Has no impact if Wi-Fi is blocked. */
    wiFiBlockAutomaticConnectHotspots?: boolean;
    /** Indicates whether or not to Block the user from using Wi-Fi. */
    wiFiBlocked?: boolean;
    /** Indicates whether or not to Block the user from using Wi-Fi manual configuration. */
    wiFiBlockManualConfiguration?: boolean;
    /** Specify how often devices scan for Wi-Fi networks. Supported values are 1-500, where 100 = default, and 500 = low frequency. Valid values 1 to 500 */
    wiFiScanInterval?: number;
    /** Allows IT admins to block experiences that are typically for consumers only, such as Start suggestions, Membership notifications, Post-OOBE app install and redirect tiles. */
    windowsSpotlightBlockConsumerSpecificFeatures?: boolean;
    /** Allows IT admins to turn off all Windows Spotlight features */
    windowsSpotlightBlocked?: boolean;
    /** Block suggestions from Microsoft that show after each OS clean install, upgrade or in an on-going basis to introduce users to what is new or changed */
    windowsSpotlightBlockOnActionCenter?: boolean;
    /** Block personalized content in Windows spotlight based on user’s device usage. */
    windowsSpotlightBlockTailoredExperiences?: boolean;
    /** Block third party content delivered via Windows Spotlight */
    windowsSpotlightBlockThirdPartyNotifications?: boolean;
    /** Block Windows Spotlight Windows welcome experience */
    windowsSpotlightBlockWelcomeExperience?: boolean;
    /** Allows IT admins to turn off the popup of Windows Tips. */
    windowsSpotlightBlockWindowsTips?: boolean;
    /** Allows IT admind to set a predefined default search engine for MDM-Controlled devices */
    windowsSpotlightConfigureOnLockScreen?: WindowsSpotlightEnablementSettings;
    /** Indicates whether or not to block automatic update of apps from Windows Store. */
    windowsStoreBlockAutoUpdate?: boolean;
    /** Indicates whether or not to Block the user from using the Windows store. */
    windowsStoreBlocked?: boolean;
    /** Indicates whether or not to enable Private Store Only. */
    windowsStoreEnablePrivateStoreOnly?: boolean;
    /** Indicates whether or not to allow other devices from discovering this PC for projection. */
    wirelessDisplayBlockProjectionToThisDevice?: boolean;
    /** Indicates whether or not to allow user input from wireless display receiver. */
    wirelessDisplayBlockUserInputFromReceiver?: boolean;
    /** Indicates whether or not to require a PIN for new devices to initiate pairing. */
    wirelessDisplayRequirePinForPairing?: boolean;
}
