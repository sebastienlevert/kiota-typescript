import {AndroidWorkProfileCrossProfileDataSharingType} from './androidWorkProfileCrossProfileDataSharingType';
import {AndroidWorkProfileDefaultAppPermissionPolicyType} from './androidWorkProfileDefaultAppPermissionPolicyType';
import {AndroidWorkProfileRequiredPasswordType} from './androidWorkProfileRequiredPasswordType';
import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {AndroidWorkProfileGeneralDeviceConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidWorkProfileGeneralDeviceConfiguration(androidWorkProfileGeneralDeviceConfiguration: AndroidWorkProfileGeneralDeviceConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(androidWorkProfileGeneralDeviceConfiguration),
        "passwordBlockFingerprintUnlock": n => { androidWorkProfileGeneralDeviceConfiguration.passwordBlockFingerprintUnlock = n.getBooleanValue() as any ; },
        "passwordBlockTrustAgents": n => { androidWorkProfileGeneralDeviceConfiguration.passwordBlockTrustAgents = n.getBooleanValue() as any ; },
        "passwordExpirationDays": n => { androidWorkProfileGeneralDeviceConfiguration.passwordExpirationDays = n.getNumberValue() as any ; },
        "passwordMinimumLength": n => { androidWorkProfileGeneralDeviceConfiguration.passwordMinimumLength = n.getNumberValue() as any ; },
        "passwordMinutesOfInactivityBeforeScreenTimeout": n => { androidWorkProfileGeneralDeviceConfiguration.passwordMinutesOfInactivityBeforeScreenTimeout = n.getNumberValue() as any ; },
        "passwordPreviousPasswordBlockCount": n => { androidWorkProfileGeneralDeviceConfiguration.passwordPreviousPasswordBlockCount = n.getNumberValue() as any ; },
        "passwordRequiredType": n => { androidWorkProfileGeneralDeviceConfiguration.passwordRequiredType = n.getEnumValue<AndroidWorkProfileRequiredPasswordType>(AndroidWorkProfileRequiredPasswordType) as any ; },
        "passwordSignInFailureCountBeforeFactoryReset": n => { androidWorkProfileGeneralDeviceConfiguration.passwordSignInFailureCountBeforeFactoryReset = n.getNumberValue() as any ; },
        "securityRequireVerifyApps": n => { androidWorkProfileGeneralDeviceConfiguration.securityRequireVerifyApps = n.getBooleanValue() as any ; },
        "workProfileBlockAddingAccounts": n => { androidWorkProfileGeneralDeviceConfiguration.workProfileBlockAddingAccounts = n.getBooleanValue() as any ; },
        "workProfileBlockCamera": n => { androidWorkProfileGeneralDeviceConfiguration.workProfileBlockCamera = n.getBooleanValue() as any ; },
        "workProfileBlockCrossProfileCallerId": n => { androidWorkProfileGeneralDeviceConfiguration.workProfileBlockCrossProfileCallerId = n.getBooleanValue() as any ; },
        "workProfileBlockCrossProfileContactsSearch": n => { androidWorkProfileGeneralDeviceConfiguration.workProfileBlockCrossProfileContactsSearch = n.getBooleanValue() as any ; },
        "workProfileBlockCrossProfileCopyPaste": n => { androidWorkProfileGeneralDeviceConfiguration.workProfileBlockCrossProfileCopyPaste = n.getBooleanValue() as any ; },
        "workProfileBlockNotificationsWhileDeviceLocked": n => { androidWorkProfileGeneralDeviceConfiguration.workProfileBlockNotificationsWhileDeviceLocked = n.getBooleanValue() as any ; },
        "workProfileBlockScreenCapture": n => { androidWorkProfileGeneralDeviceConfiguration.workProfileBlockScreenCapture = n.getBooleanValue() as any ; },
        "workProfileBluetoothEnableContactSharing": n => { androidWorkProfileGeneralDeviceConfiguration.workProfileBluetoothEnableContactSharing = n.getBooleanValue() as any ; },
        "workProfileDataSharingType": n => { androidWorkProfileGeneralDeviceConfiguration.workProfileDataSharingType = n.getEnumValue<AndroidWorkProfileCrossProfileDataSharingType>(AndroidWorkProfileCrossProfileDataSharingType) as any ; },
        "workProfileDefaultAppPermissionPolicy": n => { androidWorkProfileGeneralDeviceConfiguration.workProfileDefaultAppPermissionPolicy = n.getEnumValue<AndroidWorkProfileDefaultAppPermissionPolicyType>(AndroidWorkProfileDefaultAppPermissionPolicyType) as any ; },
        "workProfilePasswordBlockFingerprintUnlock": n => { androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordBlockFingerprintUnlock = n.getBooleanValue() as any ; },
        "workProfilePasswordBlockTrustAgents": n => { androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordBlockTrustAgents = n.getBooleanValue() as any ; },
        "workProfilePasswordExpirationDays": n => { androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordExpirationDays = n.getNumberValue() as any ; },
        "workProfilePasswordMinimumLength": n => { androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordMinimumLength = n.getNumberValue() as any ; },
        "workProfilePasswordMinLetterCharacters": n => { androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordMinLetterCharacters = n.getNumberValue() as any ; },
        "workProfilePasswordMinLowerCaseCharacters": n => { androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordMinLowerCaseCharacters = n.getNumberValue() as any ; },
        "workProfilePasswordMinNonLetterCharacters": n => { androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordMinNonLetterCharacters = n.getNumberValue() as any ; },
        "workProfilePasswordMinNumericCharacters": n => { androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordMinNumericCharacters = n.getNumberValue() as any ; },
        "workProfilePasswordMinSymbolCharacters": n => { androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordMinSymbolCharacters = n.getNumberValue() as any ; },
        "workProfilePasswordMinUpperCaseCharacters": n => { androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordMinUpperCaseCharacters = n.getNumberValue() as any ; },
        "workProfilePasswordMinutesOfInactivityBeforeScreenTimeout": n => { androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordMinutesOfInactivityBeforeScreenTimeout = n.getNumberValue() as any ; },
        "workProfilePasswordPreviousPasswordBlockCount": n => { androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordPreviousPasswordBlockCount = n.getNumberValue() as any ; },
        "workProfilePasswordRequiredType": n => { androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordRequiredType = n.getEnumValue<AndroidWorkProfileRequiredPasswordType>(AndroidWorkProfileRequiredPasswordType) as any ; },
        "workProfilePasswordSignInFailureCountBeforeFactoryReset": n => { androidWorkProfileGeneralDeviceConfiguration.workProfilePasswordSignInFailureCountBeforeFactoryReset = n.getNumberValue() as any ; },
        "workProfileRequirePassword": n => { androidWorkProfileGeneralDeviceConfiguration.workProfileRequirePassword = n.getBooleanValue() as any ; },
    }
}
