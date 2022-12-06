import {ComplianceStatus} from './complianceStatus';
import {DeviceConfigurationUserStatus} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceConfigurationUserStatus(writer: SerializationWriter, deviceConfigurationUserStatus: DeviceConfigurationUserStatus | undefined = {}) : void {
        serializeEntity(writer, deviceConfigurationUserStatus)
            writer.writeNumberValue("devicesCount", deviceConfigurationUserStatus.devicesCount);
            writer.writeDateValue("lastReportedDateTime", deviceConfigurationUserStatus.lastReportedDateTime);
            writer.writeEnumValue<ComplianceStatus>("status", deviceConfigurationUserStatus.status);
            writer.writeStringValue("userDisplayName", deviceConfigurationUserStatus.userDisplayName);
            writer.writeStringValue("userPrincipalName", deviceConfigurationUserStatus.userPrincipalName);
}
