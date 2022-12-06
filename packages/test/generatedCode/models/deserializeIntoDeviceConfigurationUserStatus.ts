import {ComplianceStatus} from './complianceStatus';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceConfigurationUserStatus} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceConfigurationUserStatus(deviceConfigurationUserStatus: DeviceConfigurationUserStatus | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceConfigurationUserStatus),
        "devicesCount": n => { deviceConfigurationUserStatus.devicesCount = n.getNumberValue() as any ; },
        "lastReportedDateTime": n => { deviceConfigurationUserStatus.lastReportedDateTime = n.getDateValue() as any ; },
        "status": n => { deviceConfigurationUserStatus.status = n.getEnumValue<ComplianceStatus>(ComplianceStatus) as any ; },
        "userDisplayName": n => { deviceConfigurationUserStatus.userDisplayName = n.getStringValue() as any ; },
        "userPrincipalName": n => { deviceConfigurationUserStatus.userPrincipalName = n.getStringValue() as any ; },
    }
}
