import {deserializeIntoDeviceCompliancePolicy} from './deserializeIntoDeviceCompliancePolicy';
import {DeviceThreatProtectionLevel} from './deviceThreatProtectionLevel';
import {MacOSCompliancePolicy} from './index';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSCompliancePolicy(macOSCompliancePolicy: MacOSCompliancePolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceCompliancePolicy(macOSCompliancePolicy),
        "deviceThreatProtectionEnabled": n => { macOSCompliancePolicy.deviceThreatProtectionEnabled = n.getBooleanValue() as any ; },
        "deviceThreatProtectionRequiredSecurityLevel": n => { macOSCompliancePolicy.deviceThreatProtectionRequiredSecurityLevel = n.getEnumValue<DeviceThreatProtectionLevel>(DeviceThreatProtectionLevel) as any ; },
        "firewallBlockAllIncoming": n => { macOSCompliancePolicy.firewallBlockAllIncoming = n.getBooleanValue() as any ; },
        "firewallEnabled": n => { macOSCompliancePolicy.firewallEnabled = n.getBooleanValue() as any ; },
        "firewallEnableStealthMode": n => { macOSCompliancePolicy.firewallEnableStealthMode = n.getBooleanValue() as any ; },
        "osMaximumVersion": n => { macOSCompliancePolicy.osMaximumVersion = n.getStringValue() as any ; },
        "osMinimumVersion": n => { macOSCompliancePolicy.osMinimumVersion = n.getStringValue() as any ; },
        "passwordBlockSimple": n => { macOSCompliancePolicy.passwordBlockSimple = n.getBooleanValue() as any ; },
        "passwordExpirationDays": n => { macOSCompliancePolicy.passwordExpirationDays = n.getNumberValue() as any ; },
        "passwordMinimumCharacterSetCount": n => { macOSCompliancePolicy.passwordMinimumCharacterSetCount = n.getNumberValue() as any ; },
        "passwordMinimumLength": n => { macOSCompliancePolicy.passwordMinimumLength = n.getNumberValue() as any ; },
        "passwordMinutesOfInactivityBeforeLock": n => { macOSCompliancePolicy.passwordMinutesOfInactivityBeforeLock = n.getNumberValue() as any ; },
        "passwordPreviousPasswordBlockCount": n => { macOSCompliancePolicy.passwordPreviousPasswordBlockCount = n.getNumberValue() as any ; },
        "passwordRequired": n => { macOSCompliancePolicy.passwordRequired = n.getBooleanValue() as any ; },
        "passwordRequiredType": n => { macOSCompliancePolicy.passwordRequiredType = n.getEnumValue<RequiredPasswordType>(RequiredPasswordType) as any ; },
        "storageRequireEncryption": n => { macOSCompliancePolicy.storageRequireEncryption = n.getBooleanValue() as any ; },
        "systemIntegrityProtectionEnabled": n => { macOSCompliancePolicy.systemIntegrityProtectionEnabled = n.getBooleanValue() as any ; },
    }
}
