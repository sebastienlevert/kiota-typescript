import {deserializeIntoDeviceCompliancePolicy} from './deserializeIntoDeviceCompliancePolicy';
import {Windows81CompliancePolicy} from './index';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindows81CompliancePolicy(windows81CompliancePolicy: Windows81CompliancePolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceCompliancePolicy(windows81CompliancePolicy),
        "osMaximumVersion": n => { windows81CompliancePolicy.osMaximumVersion = n.getStringValue() as any ; },
        "osMinimumVersion": n => { windows81CompliancePolicy.osMinimumVersion = n.getStringValue() as any ; },
        "passwordBlockSimple": n => { windows81CompliancePolicy.passwordBlockSimple = n.getBooleanValue() as any ; },
        "passwordExpirationDays": n => { windows81CompliancePolicy.passwordExpirationDays = n.getNumberValue() as any ; },
        "passwordMinimumCharacterSetCount": n => { windows81CompliancePolicy.passwordMinimumCharacterSetCount = n.getNumberValue() as any ; },
        "passwordMinimumLength": n => { windows81CompliancePolicy.passwordMinimumLength = n.getNumberValue() as any ; },
        "passwordMinutesOfInactivityBeforeLock": n => { windows81CompliancePolicy.passwordMinutesOfInactivityBeforeLock = n.getNumberValue() as any ; },
        "passwordPreviousPasswordBlockCount": n => { windows81CompliancePolicy.passwordPreviousPasswordBlockCount = n.getNumberValue() as any ; },
        "passwordRequired": n => { windows81CompliancePolicy.passwordRequired = n.getBooleanValue() as any ; },
        "passwordRequiredType": n => { windows81CompliancePolicy.passwordRequiredType = n.getEnumValue<RequiredPasswordType>(RequiredPasswordType) as any ; },
        "storageRequireEncryption": n => { windows81CompliancePolicy.storageRequireEncryption = n.getBooleanValue() as any ; },
    }
}
