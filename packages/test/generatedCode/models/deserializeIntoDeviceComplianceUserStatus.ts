import {ComplianceStatus} from './complianceStatus';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceComplianceUserStatus} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceComplianceUserStatus(deviceComplianceUserStatus: DeviceComplianceUserStatus | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceComplianceUserStatus),
        "devicesCount": n => { deviceComplianceUserStatus.devicesCount = n.getNumberValue() as any ; },
        "lastReportedDateTime": n => { deviceComplianceUserStatus.lastReportedDateTime = n.getDateValue() as any ; },
        "status": n => { deviceComplianceUserStatus.status = n.getEnumValue<ComplianceStatus>(ComplianceStatus) as any ; },
        "userDisplayName": n => { deviceComplianceUserStatus.userDisplayName = n.getStringValue() as any ; },
        "userPrincipalName": n => { deviceComplianceUserStatus.userPrincipalName = n.getStringValue() as any ; },
    }
}
