import {deserializeIntoDeviceCompliancePolicy} from './deserializeIntoDeviceCompliancePolicy';
import {WindowsPhone81CompliancePolicy} from './index';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsPhone81CompliancePolicy(windowsPhone81CompliancePolicy: WindowsPhone81CompliancePolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceCompliancePolicy(windowsPhone81CompliancePolicy),
        "osMaximumVersion": n => { windowsPhone81CompliancePolicy.osMaximumVersion = n.getStringValue() as any ; },
        "osMinimumVersion": n => { windowsPhone81CompliancePolicy.osMinimumVersion = n.getStringValue() as any ; },
        "passwordBlockSimple": n => { windowsPhone81CompliancePolicy.passwordBlockSimple = n.getBooleanValue() as any ; },
        "passwordExpirationDays": n => { windowsPhone81CompliancePolicy.passwordExpirationDays = n.getNumberValue() as any ; },
        "passwordMinimumCharacterSetCount": n => { windowsPhone81CompliancePolicy.passwordMinimumCharacterSetCount = n.getNumberValue() as any ; },
        "passwordMinimumLength": n => { windowsPhone81CompliancePolicy.passwordMinimumLength = n.getNumberValue() as any ; },
        "passwordMinutesOfInactivityBeforeLock": n => { windowsPhone81CompliancePolicy.passwordMinutesOfInactivityBeforeLock = n.getNumberValue() as any ; },
        "passwordPreviousPasswordBlockCount": n => { windowsPhone81CompliancePolicy.passwordPreviousPasswordBlockCount = n.getNumberValue() as any ; },
        "passwordRequired": n => { windowsPhone81CompliancePolicy.passwordRequired = n.getBooleanValue() as any ; },
        "passwordRequiredType": n => { windowsPhone81CompliancePolicy.passwordRequiredType = n.getEnumValue<RequiredPasswordType>(RequiredPasswordType) as any ; },
        "storageRequireEncryption": n => { windowsPhone81CompliancePolicy.storageRequireEncryption = n.getBooleanValue() as any ; },
    }
}
