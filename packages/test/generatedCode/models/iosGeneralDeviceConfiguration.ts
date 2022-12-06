import {AppListType} from './appListType';
import {AppListItem, DeviceConfiguration, IosNetworkUsageRule, MediaContentRatingAustralia, MediaContentRatingCanada, MediaContentRatingFrance, MediaContentRatingGermany, MediaContentRatingIreland, MediaContentRatingJapan, MediaContentRatingNewZealand, MediaContentRatingUnitedKingdom, MediaContentRatingUnitedStates} from './index';
import {RatingAppsType} from './ratingAppsType';
import {RequiredPasswordType} from './requiredPasswordType';
import {WebBrowserCookieSettings} from './webBrowserCookieSettings';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosGeneralDeviceConfiguration extends DeviceConfiguration, Partial<Parsable> {
    /** Indicates whether or not to allow account modification when the device is in supervised mode. */
    accountBlockModification?: boolean;
    /** Indicates whether or not to allow activation lock when the device is in the supervised mode. */
    activationLockAllowWhenSupervised?: boolean;
    /** Indicates whether or not to allow AirDrop when the device is in supervised mode. */
    airDropBlocked?: boolean;
    /** Indicates whether or not to cause AirDrop to be considered an unmanaged drop target (iOS 9.0 and later). */
    airDropForceUnmanagedDropTarget?: boolean;
    /** Indicates whether or not to enforce all devices receiving AirPlay requests from this device to use a pairing password. */
    airPlayForcePairingPasswordForOutgoingRequests?: boolean;
    /** Indicates whether or not to block the user from using News when the device is in supervised mode (iOS 9.0 and later). */
    appleNewsBlocked?: boolean;
    /** Indicates whether or not to allow Apple Watch pairing when the device is in supervised mode (iOS 9.0 and later). */
    appleWatchBlockPairing?: boolean;
    /** Indicates whether or not to force a paired Apple Watch to use Wrist Detection (iOS 8.2 and later). */
    appleWatchForceWristDetection?: boolean;
    /** Gets or sets the list of iOS apps allowed to autonomously enter Single App Mode. Supervised only. iOS 7.0 and later. This collection can contain a maximum of 500 elements. */
    appsSingleAppModeList?: AppListItem[];
    /** Indicates whether or not to block the automatic downloading of apps purchased on other devices when the device is in supervised mode (iOS 9.0 and later). */
    appStoreBlockAutomaticDownloads?: boolean;
    /** Indicates whether or not to block the user from using the App Store. Requires a supervised device for iOS 13 and later. */
    appStoreBlocked?: boolean;
    /** Indicates whether or not to block the user from making in app purchases. */
    appStoreBlockInAppPurchases?: boolean;
    /** Indicates whether or not to block the App Store app, not restricting installation through Host apps. Applies to supervised mode only (iOS 9.0 and later). */
    appStoreBlockUIAppInstallation?: boolean;
    /** Indicates whether or not to require a password when using the app store. */
    appStoreRequirePassword?: boolean;
    /** List of apps in the visibility list (either visible/launchable apps list or hidden/unlaunchable apps list, controlled by AppsVisibilityListType) (iOS 9.3 and later). This collection can contain a maximum of 10000 elements. */
    appsVisibilityList?: AppListItem[];
    /** Possible values of the compliance app list. */
    appsVisibilityListType?: AppListType;
    /** Indicates whether or not to allow modification of Bluetooth settings when the device is in supervised mode (iOS 10.0 and later). */
    bluetoothBlockModification?: boolean;
    /** Indicates whether or not to block the user from accessing the camera of the device. Requires a supervised device for iOS 13 and later. */
    cameraBlocked?: boolean;
    /** Indicates whether or not to block data roaming. */
    cellularBlockDataRoaming?: boolean;
    /** Indicates whether or not to block global background fetch while roaming. */
    cellularBlockGlobalBackgroundFetchWhileRoaming?: boolean;
    /** Indicates whether or not to allow changes to cellular app data usage settings when the device is in supervised mode. */
    cellularBlockPerAppDataModification?: boolean;
    /** Indicates whether or not to block Personal Hotspot. */
    cellularBlockPersonalHotspot?: boolean;
    /** Indicates whether or not to block voice roaming. */
    cellularBlockVoiceRoaming?: boolean;
    /** Indicates whether or not to block untrusted TLS certificates. */
    certificatesBlockUntrustedTlsCertificates?: boolean;
    /** Indicates whether or not to allow remote screen observation by Classroom app when the device is in supervised mode (iOS 9.3 and later). */
    classroomAppBlockRemoteScreenObservation?: boolean;
    /** Indicates whether or not to automatically give permission to the teacher of a managed course on the Classroom app to view a student's screen without prompting when the device is in supervised mode. */
    classroomAppForceUnpromptedScreenObservation?: boolean;
    /** Possible values of the compliance app list. */
    compliantAppListType?: AppListType;
    /** List of apps in the compliance (either allow list or block list, controlled by CompliantAppListType). This collection can contain a maximum of 10000 elements. */
    compliantAppsList?: AppListItem[];
    /** Indicates whether or not to block the user from installing configuration profiles and certificates interactively when the device is in supervised mode. */
    configurationProfileBlockChanges?: boolean;
    /** Indicates whether or not to block definition lookup when the device is in supervised mode (iOS 8.1.3 and later ). */
    definitionLookupBlocked?: boolean;
    /** Indicates whether or not to allow the user to enables restrictions in the device settings when the device is in supervised mode. */
    deviceBlockEnableRestrictions?: boolean;
    /** Indicates whether or not to allow the use of the 'Erase all content and settings' option on the device when the device is in supervised mode. */
    deviceBlockEraseContentAndSettings?: boolean;
    /** Indicates whether or not to allow device name modification when the device is in supervised mode (iOS 9.0 and later). */
    deviceBlockNameModification?: boolean;
    /** Indicates whether or not to block diagnostic data submission. */
    diagnosticDataBlockSubmission?: boolean;
    /** Indicates whether or not to allow diagnostics submission settings modification when the device is in supervised mode (iOS 9.3.2 and later). */
    diagnosticDataBlockSubmissionModification?: boolean;
    /** Indicates whether or not to block the user from viewing managed documents in unmanaged apps. */
    documentsBlockManagedDocumentsInUnmanagedApps?: boolean;
    /** Indicates whether or not to block the user from viewing unmanaged documents in managed apps. */
    documentsBlockUnmanagedDocumentsInManagedApps?: boolean;
    /** An email address lacking a suffix that matches any of these strings will be considered out-of-domain. */
    emailInDomainSuffixes?: string[];
    /** Indicates whether or not to block the user from trusting an enterprise app. */
    enterpriseAppBlockTrust?: boolean;
    /** [Deprecated] Configuring this setting and setting the value to 'true' has no effect on the device. */
    enterpriseAppBlockTrustModification?: boolean;
    /** Indicates whether or not to block the user from using FaceTime. Requires a supervised device for iOS 13 and later. */
    faceTimeBlocked?: boolean;
    /** Indicates whether or not to block changes to Find My Friends when the device is in supervised mode. */
    findMyFriendsBlocked?: boolean;
    /** Indicates whether or not to block the user from using Game Center when the device is in supervised mode. */
    gameCenterBlocked?: boolean;
    /** Indicates whether or not to block the user from having friends in Game Center. Requires a supervised device for iOS 13 and later. */
    gamingBlockGameCenterFriends?: boolean;
    /** Indicates whether or not to block the user from using multiplayer gaming. Requires a supervised device for iOS 13 and later. */
    gamingBlockMultiplayer?: boolean;
    /** indicates whether or not to allow host pairing to control the devices an iOS device can pair with when the iOS device is in supervised mode. */
    hostPairingBlocked?: boolean;
    /** Indicates whether or not to block the user from using the iBooks Store when the device is in supervised mode. */
    iBooksStoreBlocked?: boolean;
    /** Indicates whether or not to block the user from downloading media from the iBookstore that has been tagged as erotica. */
    iBooksStoreBlockErotica?: boolean;
    /** Indicates whether or not to block the user from continuing work they started on iOS device to another iOS or macOS device. */
    iCloudBlockActivityContinuation?: boolean;
    /** Indicates whether or not to block iCloud backup. Requires a supervised device for iOS 13 and later. */
    iCloudBlockBackup?: boolean;
    /** Indicates whether or not to block iCloud document sync. Requires a supervised device for iOS 13 and later. */
    iCloudBlockDocumentSync?: boolean;
    /** Indicates whether or not to block Managed Apps Cloud Sync. */
    iCloudBlockManagedAppsSync?: boolean;
    /** Indicates whether or not to block iCloud Photo Library. */
    iCloudBlockPhotoLibrary?: boolean;
    /** Indicates whether or not to block iCloud Photo Stream Sync. */
    iCloudBlockPhotoStreamSync?: boolean;
    /** Indicates whether or not to block Shared Photo Stream. */
    iCloudBlockSharedPhotoStream?: boolean;
    /** Indicates whether or not to require backups to iCloud be encrypted. */
    iCloudRequireEncryptedBackup?: boolean;
    /** Indicates whether or not to block the user from accessing explicit content in iTunes and the App Store. Requires a supervised device for iOS 13 and later. */
    iTunesBlockExplicitContent?: boolean;
    /** Indicates whether or not to block Music service and revert Music app to classic mode when the device is in supervised mode (iOS 9.3 and later and macOS 10.12 and later). */
    iTunesBlockMusicService?: boolean;
    /** Indicates whether or not to block the user from using iTunes Radio when the device is in supervised mode (iOS 9.3 and later). */
    iTunesBlockRadio?: boolean;
    /** Indicates whether or not to block keyboard auto-correction when the device is in supervised mode (iOS 8.1.3 and later). */
    keyboardBlockAutoCorrect?: boolean;
    /** Indicates whether or not to block the user from using dictation input when the device is in supervised mode. */
    keyboardBlockDictation?: boolean;
    /** Indicates whether or not to block predictive keyboards when device is in supervised mode (iOS 8.1.3 and later). */
    keyboardBlockPredictive?: boolean;
    /** Indicates whether or not to block keyboard shortcuts when the device is in supervised mode (iOS 9.0 and later). */
    keyboardBlockShortcuts?: boolean;
    /** Indicates whether or not to block keyboard spell-checking when the device is in supervised mode (iOS 8.1.3 and later). */
    keyboardBlockSpellCheck?: boolean;
    /** Indicates whether or not to allow assistive speak while in kiosk mode. */
    kioskModeAllowAssistiveSpeak?: boolean;
    /** Indicates whether or not to allow access to the Assistive Touch Settings while in kiosk mode. */
    kioskModeAllowAssistiveTouchSettings?: boolean;
    /** Indicates whether or not to allow device auto lock while in kiosk mode. This property's functionality is redundant with the OS default and is deprecated. Use KioskModeBlockAutoLock instead. */
    kioskModeAllowAutoLock?: boolean;
    /** Indicates whether or not to allow access to the Color Inversion Settings while in kiosk mode. */
    kioskModeAllowColorInversionSettings?: boolean;
    /** Indicates whether or not to allow use of the ringer switch while in kiosk mode. This property's functionality is redundant with the OS default and is deprecated. Use KioskModeBlockRingerSwitch instead. */
    kioskModeAllowRingerSwitch?: boolean;
    /** Indicates whether or not to allow screen rotation while in kiosk mode. This property's functionality is redundant with the OS default and is deprecated. Use KioskModeBlockScreenRotation instead. */
    kioskModeAllowScreenRotation?: boolean;
    /** Indicates whether or not to allow use of the sleep button while in kiosk mode. This property's functionality is redundant with the OS default and is deprecated. Use KioskModeBlockSleepButton instead. */
    kioskModeAllowSleepButton?: boolean;
    /** Indicates whether or not to allow use of the touchscreen while in kiosk mode. This property's functionality is redundant with the OS default and is deprecated. Use KioskModeBlockTouchscreen instead. */
    kioskModeAllowTouchscreen?: boolean;
    /** Indicates whether or not to allow access to the voice over settings while in kiosk mode. */
    kioskModeAllowVoiceOverSettings?: boolean;
    /** Indicates whether or not to allow use of the volume buttons while in kiosk mode. This property's functionality is redundant with the OS default and is deprecated. Use KioskModeBlockVolumeButtons instead. */
    kioskModeAllowVolumeButtons?: boolean;
    /** Indicates whether or not to allow access to the zoom settings while in kiosk mode. */
    kioskModeAllowZoomSettings?: boolean;
    /** URL in the app store to the app to use for kiosk mode. Use if KioskModeManagedAppId is not known. */
    kioskModeAppStoreUrl?: string;
    /** ID for built-in apps to use for kiosk mode. Used when KioskModeManagedAppId and KioskModeAppStoreUrl are not set. */
    kioskModeBuiltInAppId?: string;
    /** Managed app id of the app to use for kiosk mode. If KioskModeManagedAppId is specified then KioskModeAppStoreUrl will be ignored. */
    kioskModeManagedAppId?: string;
    /** Indicates whether or not to require assistive touch while in kiosk mode. */
    kioskModeRequireAssistiveTouch?: boolean;
    /** Indicates whether or not to require color inversion while in kiosk mode. */
    kioskModeRequireColorInversion?: boolean;
    /** Indicates whether or not to require mono audio while in kiosk mode. */
    kioskModeRequireMonoAudio?: boolean;
    /** Indicates whether or not to require voice over while in kiosk mode. */
    kioskModeRequireVoiceOver?: boolean;
    /** Indicates whether or not to require zoom while in kiosk mode. */
    kioskModeRequireZoom?: boolean;
    /** Indicates whether or not to block the user from using control center on the lock screen. */
    lockScreenBlockControlCenter?: boolean;
    /** Indicates whether or not to block the user from using the notification view on the lock screen. */
    lockScreenBlockNotificationView?: boolean;
    /** Indicates whether or not to block the user from using passbook when the device is locked. */
    lockScreenBlockPassbook?: boolean;
    /** Indicates whether or not to block the user from using the Today View on the lock screen. */
    lockScreenBlockTodayView?: boolean;
    /** Apps rating as in media content */
    mediaContentRatingApps?: RatingAppsType;
    /** Media content rating settings for Australia */
    mediaContentRatingAustralia?: MediaContentRatingAustralia;
    /** Media content rating settings for Canada */
    mediaContentRatingCanada?: MediaContentRatingCanada;
    /** Media content rating settings for France */
    mediaContentRatingFrance?: MediaContentRatingFrance;
    /** Media content rating settings for Germany */
    mediaContentRatingGermany?: MediaContentRatingGermany;
    /** Media content rating settings for Ireland */
    mediaContentRatingIreland?: MediaContentRatingIreland;
    /** Media content rating settings for Japan */
    mediaContentRatingJapan?: MediaContentRatingJapan;
    /** Media content rating settings for New Zealand */
    mediaContentRatingNewZealand?: MediaContentRatingNewZealand;
    /** Media content rating settings for United Kingdom */
    mediaContentRatingUnitedKingdom?: MediaContentRatingUnitedKingdom;
    /** Media content rating settings for United States */
    mediaContentRatingUnitedStates?: MediaContentRatingUnitedStates;
    /** Indicates whether or not to block the user from using the Messages app on the supervised device. */
    messagesBlocked?: boolean;
    /** List of managed apps and the network rules that applies to them. This collection can contain a maximum of 1000 elements. */
    networkUsageRules?: IosNetworkUsageRule[];
    /** Indicates whether or not to allow notifications settings modification (iOS 9.3 and later). */
    notificationsBlockSettingsModification?: boolean;
    /** Block modification of registered Touch ID fingerprints when in supervised mode. */
    passcodeBlockFingerprintModification?: boolean;
    /** Indicates whether or not to block fingerprint unlock. */
    passcodeBlockFingerprintUnlock?: boolean;
    /** Indicates whether or not to allow passcode modification on the supervised device (iOS 9.0 and later). */
    passcodeBlockModification?: boolean;
    /** Indicates whether or not to block simple passcodes. */
    passcodeBlockSimple?: boolean;
    /** Number of days before the passcode expires. Valid values 1 to 65535 */
    passcodeExpirationDays?: number;
    /** Number of character sets a passcode must contain. Valid values 0 to 4 */
    passcodeMinimumCharacterSetCount?: number;
    /** Minimum length of passcode. Valid values 4 to 14 */
    passcodeMinimumLength?: number;
    /** Minutes of inactivity before a passcode is required. */
    passcodeMinutesOfInactivityBeforeLock?: number;
    /** Minutes of inactivity before the screen times out. */
    passcodeMinutesOfInactivityBeforeScreenTimeout?: number;
    /** Number of previous passcodes to block. Valid values 1 to 24 */
    passcodePreviousPasscodeBlockCount?: number;
    /** Indicates whether or not to require a passcode. */
    passcodeRequired?: boolean;
    /** Possible values of required passwords. */
    passcodeRequiredType?: RequiredPasswordType;
    /** Number of sign in failures allowed before wiping the device. Valid values 2 to 11 */
    passcodeSignInFailureCountBeforeWipe?: number;
    /** Indicates whether or not to block the user from using podcasts on the supervised device (iOS 8.0 and later). */
    podcastsBlocked?: boolean;
    /** Indicates whether or not to block the user from using Auto fill in Safari. Requires a supervised device for iOS 13 and later. */
    safariBlockAutofill?: boolean;
    /** Indicates whether or not to block the user from using Safari. Requires a supervised device for iOS 13 and later. */
    safariBlocked?: boolean;
    /** Indicates whether or not to block JavaScript in Safari. */
    safariBlockJavaScript?: boolean;
    /** Indicates whether or not to block popups in Safari. */
    safariBlockPopups?: boolean;
    /** Web Browser Cookie Settings. */
    safariCookieSettings?: WebBrowserCookieSettings;
    /** URLs matching the patterns listed here will be considered managed. */
    safariManagedDomains?: string[];
    /** Users can save passwords in Safari only from URLs matching the patterns listed here. Applies to devices in supervised mode (iOS 9.3 and later). */
    safariPasswordAutoFillDomains?: string[];
    /** Indicates whether or not to require fraud warning in Safari. */
    safariRequireFraudWarning?: boolean;
    /** Indicates whether or not to block the user from taking Screenshots. */
    screenCaptureBlocked?: boolean;
    /** Indicates whether or not to block the user from using Siri. */
    siriBlocked?: boolean;
    /** Indicates whether or not to block the user from using Siri when locked. */
    siriBlockedWhenLocked?: boolean;
    /** Indicates whether or not to block Siri from querying user-generated content when used on a supervised device. */
    siriBlockUserGeneratedContent?: boolean;
    /** Indicates whether or not to prevent Siri from dictating, or speaking profane language on supervised device. */
    siriRequireProfanityFilter?: boolean;
    /** Indicates whether or not to block Spotlight search from returning internet results on supervised device. */
    spotlightBlockInternetResults?: boolean;
    /** Indicates whether or not to block voice dialing. */
    voiceDialingBlocked?: boolean;
    /** Indicates whether or not to allow wallpaper modification on supervised device (iOS 9.0 and later) . */
    wallpaperBlockModification?: boolean;
    /** Indicates whether or not to force the device to use only Wi-Fi networks from configuration profiles when the device is in supervised mode. Available for devices running iOS and iPadOS versions 14.4 and earlier. Devices running 14.5+ should use the setting, 'WiFiConnectToAllowedNetworksOnlyForced. */
    wiFiConnectOnlyToConfiguredNetworks?: boolean;
}
