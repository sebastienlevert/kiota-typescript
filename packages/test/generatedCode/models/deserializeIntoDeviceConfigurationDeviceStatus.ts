import {ComplianceStatus} from './complianceStatus';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceConfigurationDeviceStatus} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceConfigurationDeviceStatus(deviceConfigurationDeviceStatus: DeviceConfigurationDeviceStatus | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceConfigurationDeviceStatus),
        "complianceGracePeriodExpirationDateTime": n => { deviceConfigurationDeviceStatus.complianceGracePeriodExpirationDateTime = n.getDateValue() as any ; },
        "deviceDisplayName": n => { deviceConfigurationDeviceStatus.deviceDisplayName = n.getStringValue() as any ; },
        "deviceModel": n => { deviceConfigurationDeviceStatus.deviceModel = n.getStringValue() as any ; },
        "lastReportedDateTime": n => { deviceConfigurationDeviceStatus.lastReportedDateTime = n.getDateValue() as any ; },
        "status": n => { deviceConfigurationDeviceStatus.status = n.getEnumValue<ComplianceStatus>(ComplianceStatus) as any ; },
        "userName": n => { deviceConfigurationDeviceStatus.userName = n.getStringValue() as any ; },
        "userPrincipalName": n => { deviceConfigurationDeviceStatus.userPrincipalName = n.getStringValue() as any ; },
    }
}
