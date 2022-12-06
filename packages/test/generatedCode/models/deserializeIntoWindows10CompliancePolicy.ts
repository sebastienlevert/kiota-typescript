import {deserializeIntoDeviceCompliancePolicy} from './deserializeIntoDeviceCompliancePolicy';
import {Windows10CompliancePolicy} from './index';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindows10CompliancePolicy(windows10CompliancePolicy: Windows10CompliancePolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceCompliancePolicy(windows10CompliancePolicy),
        "bitLockerEnabled": n => { windows10CompliancePolicy.bitLockerEnabled = n.getBooleanValue() as any ; },
        "codeIntegrityEnabled": n => { windows10CompliancePolicy.codeIntegrityEnabled = n.getBooleanValue() as any ; },
        "earlyLaunchAntiMalwareDriverEnabled": n => { windows10CompliancePolicy.earlyLaunchAntiMalwareDriverEnabled = n.getBooleanValue() as any ; },
        "mobileOsMaximumVersion": n => { windows10CompliancePolicy.mobileOsMaximumVersion = n.getStringValue() as any ; },
        "mobileOsMinimumVersion": n => { windows10CompliancePolicy.mobileOsMinimumVersion = n.getStringValue() as any ; },
        "osMaximumVersion": n => { windows10CompliancePolicy.osMaximumVersion = n.getStringValue() as any ; },
        "osMinimumVersion": n => { windows10CompliancePolicy.osMinimumVersion = n.getStringValue() as any ; },
        "passwordBlockSimple": n => { windows10CompliancePolicy.passwordBlockSimple = n.getBooleanValue() as any ; },
        "passwordExpirationDays": n => { windows10CompliancePolicy.passwordExpirationDays = n.getNumberValue() as any ; },
        "passwordMinimumCharacterSetCount": n => { windows10CompliancePolicy.passwordMinimumCharacterSetCount = n.getNumberValue() as any ; },
        "passwordMinimumLength": n => { windows10CompliancePolicy.passwordMinimumLength = n.getNumberValue() as any ; },
        "passwordMinutesOfInactivityBeforeLock": n => { windows10CompliancePolicy.passwordMinutesOfInactivityBeforeLock = n.getNumberValue() as any ; },
        "passwordPreviousPasswordBlockCount": n => { windows10CompliancePolicy.passwordPreviousPasswordBlockCount = n.getNumberValue() as any ; },
        "passwordRequired": n => { windows10CompliancePolicy.passwordRequired = n.getBooleanValue() as any ; },
        "passwordRequiredToUnlockFromIdle": n => { windows10CompliancePolicy.passwordRequiredToUnlockFromIdle = n.getBooleanValue() as any ; },
        "passwordRequiredType": n => { windows10CompliancePolicy.passwordRequiredType = n.getEnumValue<RequiredPasswordType>(RequiredPasswordType) as any ; },
        "requireHealthyDeviceReport": n => { windows10CompliancePolicy.requireHealthyDeviceReport = n.getBooleanValue() as any ; },
        "secureBootEnabled": n => { windows10CompliancePolicy.secureBootEnabled = n.getBooleanValue() as any ; },
        "storageRequireEncryption": n => { windows10CompliancePolicy.storageRequireEncryption = n.getBooleanValue() as any ; },
    }
}
