import {WindowsPhone81CompliancePolicy} from './index';
import {RequiredPasswordType} from './requiredPasswordType';
import {serializeDeviceCompliancePolicy} from './serializeDeviceCompliancePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsPhone81CompliancePolicy(writer: SerializationWriter, windowsPhone81CompliancePolicy: WindowsPhone81CompliancePolicy | undefined = {}) : void {
        serializeDeviceCompliancePolicy(writer, windowsPhone81CompliancePolicy)
            writer.writeStringValue("osMaximumVersion", windowsPhone81CompliancePolicy.osMaximumVersion);
            writer.writeStringValue("osMinimumVersion", windowsPhone81CompliancePolicy.osMinimumVersion);
            writer.writeBooleanValue("passwordBlockSimple", windowsPhone81CompliancePolicy.passwordBlockSimple);
            writer.writeNumberValue("passwordExpirationDays", windowsPhone81CompliancePolicy.passwordExpirationDays);
            writer.writeNumberValue("passwordMinimumCharacterSetCount", windowsPhone81CompliancePolicy.passwordMinimumCharacterSetCount);
            writer.writeNumberValue("passwordMinimumLength", windowsPhone81CompliancePolicy.passwordMinimumLength);
            writer.writeNumberValue("passwordMinutesOfInactivityBeforeLock", windowsPhone81CompliancePolicy.passwordMinutesOfInactivityBeforeLock);
            writer.writeNumberValue("passwordPreviousPasswordBlockCount", windowsPhone81CompliancePolicy.passwordPreviousPasswordBlockCount);
            writer.writeBooleanValue("passwordRequired", windowsPhone81CompliancePolicy.passwordRequired);
            writer.writeEnumValue<RequiredPasswordType>("passwordRequiredType", windowsPhone81CompliancePolicy.passwordRequiredType);
            writer.writeBooleanValue("storageRequireEncryption", windowsPhone81CompliancePolicy.storageRequireEncryption);
}
