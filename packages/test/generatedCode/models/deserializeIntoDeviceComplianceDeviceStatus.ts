import {ComplianceStatus} from './complianceStatus';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceComplianceDeviceStatus} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceComplianceDeviceStatus(deviceComplianceDeviceStatus: DeviceComplianceDeviceStatus | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceComplianceDeviceStatus),
        "complianceGracePeriodExpirationDateTime": n => { deviceComplianceDeviceStatus.complianceGracePeriodExpirationDateTime = n.getDateValue() as any ; },
        "deviceDisplayName": n => { deviceComplianceDeviceStatus.deviceDisplayName = n.getStringValue() as any ; },
        "deviceModel": n => { deviceComplianceDeviceStatus.deviceModel = n.getStringValue() as any ; },
        "lastReportedDateTime": n => { deviceComplianceDeviceStatus.lastReportedDateTime = n.getDateValue() as any ; },
        "status": n => { deviceComplianceDeviceStatus.status = n.getEnumValue<ComplianceStatus>(ComplianceStatus) as any ; },
        "userName": n => { deviceComplianceDeviceStatus.userName = n.getStringValue() as any ; },
        "userPrincipalName": n => { deviceComplianceDeviceStatus.userPrincipalName = n.getStringValue() as any ; },
    }
}
