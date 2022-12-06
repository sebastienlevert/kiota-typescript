import {AndroidRequiredPasswordType} from './androidRequiredPasswordType';
import {AppListType} from './appListType';
import {deserializeIntoAppListItem} from './deserializeIntoAppListItem';
import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {AndroidGeneralDeviceConfiguration} from './index';
import {WebBrowserCookieSettings} from './webBrowserCookieSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidGeneralDeviceConfiguration(androidGeneralDeviceConfiguration: AndroidGeneralDeviceConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(androidGeneralDeviceConfiguration),
        "appsBlockClipboardSharing": n => { androidGeneralDeviceConfiguration.appsBlockClipboardSharing = n.getBooleanValue() as any ; },
        "appsBlockCopyPaste": n => { androidGeneralDeviceConfiguration.appsBlockCopyPaste = n.getBooleanValue() as any ; },
        "appsBlockYouTube": n => { androidGeneralDeviceConfiguration.appsBlockYouTube = n.getBooleanValue() as any ; },
        "appsHideList": n => { androidGeneralDeviceConfiguration.appsHideList = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAppListItem) as any ; },
        "appsInstallAllowList": n => { androidGeneralDeviceConfiguration.appsInstallAllowList = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAppListItem) as any ; },
        "appsLaunchBlockList": n => { androidGeneralDeviceConfiguration.appsLaunchBlockList = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAppListItem) as any ; },
        "bluetoothBlocked": n => { androidGeneralDeviceConfiguration.bluetoothBlocked = n.getBooleanValue() as any ; },
        "cameraBlocked": n => { androidGeneralDeviceConfiguration.cameraBlocked = n.getBooleanValue() as any ; },
        "cellularBlockDataRoaming": n => { androidGeneralDeviceConfiguration.cellularBlockDataRoaming = n.getBooleanValue() as any ; },
        "cellularBlockMessaging": n => { androidGeneralDeviceConfiguration.cellularBlockMessaging = n.getBooleanValue() as any ; },
        "cellularBlockVoiceRoaming": n => { androidGeneralDeviceConfiguration.cellularBlockVoiceRoaming = n.getBooleanValue() as any ; },
        "cellularBlockWiFiTethering": n => { androidGeneralDeviceConfiguration.cellularBlockWiFiTethering = n.getBooleanValue() as any ; },
        "compliantAppListType": n => { androidGeneralDeviceConfiguration.compliantAppListType = n.getEnumValue<AppListType>(AppListType) as any ; },
        "compliantAppsList": n => { androidGeneralDeviceConfiguration.compliantAppsList = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAppListItem) as any ; },
        "deviceSharingAllowed": n => { androidGeneralDeviceConfiguration.deviceSharingAllowed = n.getBooleanValue() as any ; },
        "diagnosticDataBlockSubmission": n => { androidGeneralDeviceConfiguration.diagnosticDataBlockSubmission = n.getBooleanValue() as any ; },
        "factoryResetBlocked": n => { androidGeneralDeviceConfiguration.factoryResetBlocked = n.getBooleanValue() as any ; },
        "googleAccountBlockAutoSync": n => { androidGeneralDeviceConfiguration.googleAccountBlockAutoSync = n.getBooleanValue() as any ; },
        "googlePlayStoreBlocked": n => { androidGeneralDeviceConfiguration.googlePlayStoreBlocked = n.getBooleanValue() as any ; },
        "kioskModeApps": n => { androidGeneralDeviceConfiguration.kioskModeApps = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAppListItem) as any ; },
        "kioskModeBlockSleepButton": n => { androidGeneralDeviceConfiguration.kioskModeBlockSleepButton = n.getBooleanValue() as any ; },
        "kioskModeBlockVolumeButtons": n => { androidGeneralDeviceConfiguration.kioskModeBlockVolumeButtons = n.getBooleanValue() as any ; },
        "locationServicesBlocked": n => { androidGeneralDeviceConfiguration.locationServicesBlocked = n.getBooleanValue() as any ; },
        "nfcBlocked": n => { androidGeneralDeviceConfiguration.nfcBlocked = n.getBooleanValue() as any ; },
        "passwordBlockFingerprintUnlock": n => { androidGeneralDeviceConfiguration.passwordBlockFingerprintUnlock = n.getBooleanValue() as any ; },
        "passwordBlockTrustAgents": n => { androidGeneralDeviceConfiguration.passwordBlockTrustAgents = n.getBooleanValue() as any ; },
        "passwordExpirationDays": n => { androidGeneralDeviceConfiguration.passwordExpirationDays = n.getNumberValue() as any ; },
        "passwordMinimumLength": n => { androidGeneralDeviceConfiguration.passwordMinimumLength = n.getNumberValue() as any ; },
        "passwordMinutesOfInactivityBeforeScreenTimeout": n => { androidGeneralDeviceConfiguration.passwordMinutesOfInactivityBeforeScreenTimeout = n.getNumberValue() as any ; },
        "passwordPreviousPasswordBlockCount": n => { androidGeneralDeviceConfiguration.passwordPreviousPasswordBlockCount = n.getNumberValue() as any ; },
        "passwordRequired": n => { androidGeneralDeviceConfiguration.passwordRequired = n.getBooleanValue() as any ; },
        "passwordRequiredType": n => { androidGeneralDeviceConfiguration.passwordRequiredType = n.getEnumValue<AndroidRequiredPasswordType>(AndroidRequiredPasswordType) as any ; },
        "passwordSignInFailureCountBeforeFactoryReset": n => { androidGeneralDeviceConfiguration.passwordSignInFailureCountBeforeFactoryReset = n.getNumberValue() as any ; },
        "powerOffBlocked": n => { androidGeneralDeviceConfiguration.powerOffBlocked = n.getBooleanValue() as any ; },
        "screenCaptureBlocked": n => { androidGeneralDeviceConfiguration.screenCaptureBlocked = n.getBooleanValue() as any ; },
        "securityRequireVerifyApps": n => { androidGeneralDeviceConfiguration.securityRequireVerifyApps = n.getBooleanValue() as any ; },
        "storageBlockGoogleBackup": n => { androidGeneralDeviceConfiguration.storageBlockGoogleBackup = n.getBooleanValue() as any ; },
        "storageBlockRemovableStorage": n => { androidGeneralDeviceConfiguration.storageBlockRemovableStorage = n.getBooleanValue() as any ; },
        "storageRequireDeviceEncryption": n => { androidGeneralDeviceConfiguration.storageRequireDeviceEncryption = n.getBooleanValue() as any ; },
        "storageRequireRemovableStorageEncryption": n => { androidGeneralDeviceConfiguration.storageRequireRemovableStorageEncryption = n.getBooleanValue() as any ; },
        "voiceAssistantBlocked": n => { androidGeneralDeviceConfiguration.voiceAssistantBlocked = n.getBooleanValue() as any ; },
        "voiceDialingBlocked": n => { androidGeneralDeviceConfiguration.voiceDialingBlocked = n.getBooleanValue() as any ; },
        "webBrowserBlockAutofill": n => { androidGeneralDeviceConfiguration.webBrowserBlockAutofill = n.getBooleanValue() as any ; },
        "webBrowserBlocked": n => { androidGeneralDeviceConfiguration.webBrowserBlocked = n.getBooleanValue() as any ; },
        "webBrowserBlockJavaScript": n => { androidGeneralDeviceConfiguration.webBrowserBlockJavaScript = n.getBooleanValue() as any ; },
        "webBrowserBlockPopups": n => { androidGeneralDeviceConfiguration.webBrowserBlockPopups = n.getBooleanValue() as any ; },
        "webBrowserCookieSettings": n => { androidGeneralDeviceConfiguration.webBrowserCookieSettings = n.getEnumValue<WebBrowserCookieSettings>(WebBrowserCookieSettings) as any ; },
        "wiFiBlocked": n => { androidGeneralDeviceConfiguration.wiFiBlocked = n.getBooleanValue() as any ; },
    }
}
