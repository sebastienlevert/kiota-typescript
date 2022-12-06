import {deserializeIntoDeviceCompliancePolicy} from './deserializeIntoDeviceCompliancePolicy';
import {DeviceThreatProtectionLevel} from './deviceThreatProtectionLevel';
import {IosCompliancePolicy} from './index';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosCompliancePolicy(iosCompliancePolicy: IosCompliancePolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceCompliancePolicy(iosCompliancePolicy),
        "deviceThreatProtectionEnabled": n => { iosCompliancePolicy.deviceThreatProtectionEnabled = n.getBooleanValue() as any ; },
        "deviceThreatProtectionRequiredSecurityLevel": n => { iosCompliancePolicy.deviceThreatProtectionRequiredSecurityLevel = n.getEnumValue<DeviceThreatProtectionLevel>(DeviceThreatProtectionLevel) as any ; },
        "managedEmailProfileRequired": n => { iosCompliancePolicy.managedEmailProfileRequired = n.getBooleanValue() as any ; },
        "osMaximumVersion": n => { iosCompliancePolicy.osMaximumVersion = n.getStringValue() as any ; },
        "osMinimumVersion": n => { iosCompliancePolicy.osMinimumVersion = n.getStringValue() as any ; },
        "passcodeBlockSimple": n => { iosCompliancePolicy.passcodeBlockSimple = n.getBooleanValue() as any ; },
        "passcodeExpirationDays": n => { iosCompliancePolicy.passcodeExpirationDays = n.getNumberValue() as any ; },
        "passcodeMinimumCharacterSetCount": n => { iosCompliancePolicy.passcodeMinimumCharacterSetCount = n.getNumberValue() as any ; },
        "passcodeMinimumLength": n => { iosCompliancePolicy.passcodeMinimumLength = n.getNumberValue() as any ; },
        "passcodeMinutesOfInactivityBeforeLock": n => { iosCompliancePolicy.passcodeMinutesOfInactivityBeforeLock = n.getNumberValue() as any ; },
        "passcodePreviousPasscodeBlockCount": n => { iosCompliancePolicy.passcodePreviousPasscodeBlockCount = n.getNumberValue() as any ; },
        "passcodeRequired": n => { iosCompliancePolicy.passcodeRequired = n.getBooleanValue() as any ; },
        "passcodeRequiredType": n => { iosCompliancePolicy.passcodeRequiredType = n.getEnumValue<RequiredPasswordType>(RequiredPasswordType) as any ; },
        "securityBlockJailbrokenDevices": n => { iosCompliancePolicy.securityBlockJailbrokenDevices = n.getBooleanValue() as any ; },
    }
}
