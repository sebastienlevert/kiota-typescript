import {deserializeIntoDeviceCompliancePolicy} from './deserializeIntoDeviceCompliancePolicy';
import {Windows10MobileCompliancePolicy} from './index';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindows10MobileCompliancePolicy(windows10MobileCompliancePolicy: Windows10MobileCompliancePolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceCompliancePolicy(windows10MobileCompliancePolicy),
        "bitLockerEnabled": n => { windows10MobileCompliancePolicy.bitLockerEnabled = n.getBooleanValue() as any ; },
        "codeIntegrityEnabled": n => { windows10MobileCompliancePolicy.codeIntegrityEnabled = n.getBooleanValue() as any ; },
        "earlyLaunchAntiMalwareDriverEnabled": n => { windows10MobileCompliancePolicy.earlyLaunchAntiMalwareDriverEnabled = n.getBooleanValue() as any ; },
        "osMaximumVersion": n => { windows10MobileCompliancePolicy.osMaximumVersion = n.getStringValue() as any ; },
        "osMinimumVersion": n => { windows10MobileCompliancePolicy.osMinimumVersion = n.getStringValue() as any ; },
        "passwordBlockSimple": n => { windows10MobileCompliancePolicy.passwordBlockSimple = n.getBooleanValue() as any ; },
        "passwordExpirationDays": n => { windows10MobileCompliancePolicy.passwordExpirationDays = n.getNumberValue() as any ; },
        "passwordMinimumCharacterSetCount": n => { windows10MobileCompliancePolicy.passwordMinimumCharacterSetCount = n.getNumberValue() as any ; },
        "passwordMinimumLength": n => { windows10MobileCompliancePolicy.passwordMinimumLength = n.getNumberValue() as any ; },
        "passwordMinutesOfInactivityBeforeLock": n => { windows10MobileCompliancePolicy.passwordMinutesOfInactivityBeforeLock = n.getNumberValue() as any ; },
        "passwordPreviousPasswordBlockCount": n => { windows10MobileCompliancePolicy.passwordPreviousPasswordBlockCount = n.getNumberValue() as any ; },
        "passwordRequired": n => { windows10MobileCompliancePolicy.passwordRequired = n.getBooleanValue() as any ; },
        "passwordRequiredType": n => { windows10MobileCompliancePolicy.passwordRequiredType = n.getEnumValue<RequiredPasswordType>(RequiredPasswordType) as any ; },
        "passwordRequireToUnlockFromIdle": n => { windows10MobileCompliancePolicy.passwordRequireToUnlockFromIdle = n.getBooleanValue() as any ; },
        "secureBootEnabled": n => { windows10MobileCompliancePolicy.secureBootEnabled = n.getBooleanValue() as any ; },
        "storageRequireEncryption": n => { windows10MobileCompliancePolicy.storageRequireEncryption = n.getBooleanValue() as any ; },
    }
}
