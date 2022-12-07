import {WindowsInformationProtectionDeviceRegistration} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionDeviceRegistration(writer: SerializationWriter, windowsInformationProtectionDeviceRegistration: WindowsInformationProtectionDeviceRegistration | undefined = {}) : void {
        serializeEntity(writer, windowsInformationProtectionDeviceRegistration)
            writer.writeStringValue("deviceMacAddress", windowsInformationProtectionDeviceRegistration.deviceMacAddress);
            writer.writeStringValue("deviceName", windowsInformationProtectionDeviceRegistration.deviceName);
            writer.writeStringValue("deviceRegistrationId", windowsInformationProtectionDeviceRegistration.deviceRegistrationId);
            writer.writeStringValue("deviceType", windowsInformationProtectionDeviceRegistration.deviceType);
            writer.writeDateValue("lastCheckInDateTime", windowsInformationProtectionDeviceRegistration.lastCheckInDateTime);
            writer.writeStringValue("userId", windowsInformationProtectionDeviceRegistration.userId);
}
