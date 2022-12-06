import {AppListType} from './appListType';
import {deserializeIntoAppListItem} from './deserializeIntoAppListItem';
import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {WindowsPhone81GeneralConfiguration} from './index';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsPhone81GeneralConfiguration(windowsPhone81GeneralConfiguration: WindowsPhone81GeneralConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(windowsPhone81GeneralConfiguration),
        "applyOnlyToWindowsPhone81": n => { windowsPhone81GeneralConfiguration.applyOnlyToWindowsPhone81 = n.getBooleanValue() as any ; },
        "appsBlockCopyPaste": n => { windowsPhone81GeneralConfiguration.appsBlockCopyPaste = n.getBooleanValue() as any ; },
        "bluetoothBlocked": n => { windowsPhone81GeneralConfiguration.bluetoothBlocked = n.getBooleanValue() as any ; },
        "cameraBlocked": n => { windowsPhone81GeneralConfiguration.cameraBlocked = n.getBooleanValue() as any ; },
        "cellularBlockWifiTethering": n => { windowsPhone81GeneralConfiguration.cellularBlockWifiTethering = n.getBooleanValue() as any ; },
        "compliantAppListType": n => { windowsPhone81GeneralConfiguration.compliantAppListType = n.getEnumValue<AppListType>(AppListType) as any ; },
        "compliantAppsList": n => { windowsPhone81GeneralConfiguration.compliantAppsList = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAppListItem) as any ; },
        "diagnosticDataBlockSubmission": n => { windowsPhone81GeneralConfiguration.diagnosticDataBlockSubmission = n.getBooleanValue() as any ; },
        "emailBlockAddingAccounts": n => { windowsPhone81GeneralConfiguration.emailBlockAddingAccounts = n.getBooleanValue() as any ; },
        "locationServicesBlocked": n => { windowsPhone81GeneralConfiguration.locationServicesBlocked = n.getBooleanValue() as any ; },
        "microsoftAccountBlocked": n => { windowsPhone81GeneralConfiguration.microsoftAccountBlocked = n.getBooleanValue() as any ; },
        "nfcBlocked": n => { windowsPhone81GeneralConfiguration.nfcBlocked = n.getBooleanValue() as any ; },
        "passwordBlockSimple": n => { windowsPhone81GeneralConfiguration.passwordBlockSimple = n.getBooleanValue() as any ; },
        "passwordExpirationDays": n => { windowsPhone81GeneralConfiguration.passwordExpirationDays = n.getNumberValue() as any ; },
        "passwordMinimumCharacterSetCount": n => { windowsPhone81GeneralConfiguration.passwordMinimumCharacterSetCount = n.getNumberValue() as any ; },
        "passwordMinimumLength": n => { windowsPhone81GeneralConfiguration.passwordMinimumLength = n.getNumberValue() as any ; },
        "passwordMinutesOfInactivityBeforeScreenTimeout": n => { windowsPhone81GeneralConfiguration.passwordMinutesOfInactivityBeforeScreenTimeout = n.getNumberValue() as any ; },
        "passwordPreviousPasswordBlockCount": n => { windowsPhone81GeneralConfiguration.passwordPreviousPasswordBlockCount = n.getNumberValue() as any ; },
        "passwordRequired": n => { windowsPhone81GeneralConfiguration.passwordRequired = n.getBooleanValue() as any ; },
        "passwordRequiredType": n => { windowsPhone81GeneralConfiguration.passwordRequiredType = n.getEnumValue<RequiredPasswordType>(RequiredPasswordType) as any ; },
        "passwordSignInFailureCountBeforeFactoryReset": n => { windowsPhone81GeneralConfiguration.passwordSignInFailureCountBeforeFactoryReset = n.getNumberValue() as any ; },
        "screenCaptureBlocked": n => { windowsPhone81GeneralConfiguration.screenCaptureBlocked = n.getBooleanValue() as any ; },
        "storageBlockRemovableStorage": n => { windowsPhone81GeneralConfiguration.storageBlockRemovableStorage = n.getBooleanValue() as any ; },
        "storageRequireEncryption": n => { windowsPhone81GeneralConfiguration.storageRequireEncryption = n.getBooleanValue() as any ; },
        "webBrowserBlocked": n => { windowsPhone81GeneralConfiguration.webBrowserBlocked = n.getBooleanValue() as any ; },
        "wifiBlockAutomaticConnectHotspots": n => { windowsPhone81GeneralConfiguration.wifiBlockAutomaticConnectHotspots = n.getBooleanValue() as any ; },
        "wifiBlocked": n => { windowsPhone81GeneralConfiguration.wifiBlocked = n.getBooleanValue() as any ; },
        "wifiBlockHotspotReporting": n => { windowsPhone81GeneralConfiguration.wifiBlockHotspotReporting = n.getBooleanValue() as any ; },
        "windowsStoreBlocked": n => { windowsPhone81GeneralConfiguration.windowsStoreBlocked = n.getBooleanValue() as any ; },
    }
}
