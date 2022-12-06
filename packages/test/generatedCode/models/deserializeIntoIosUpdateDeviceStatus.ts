import {ComplianceStatus} from './complianceStatus';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {IosUpdateDeviceStatus} from './index';
import {IosUpdatesInstallStatus} from './iosUpdatesInstallStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosUpdateDeviceStatus(iosUpdateDeviceStatus: IosUpdateDeviceStatus | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(iosUpdateDeviceStatus),
        "complianceGracePeriodExpirationDateTime": n => { iosUpdateDeviceStatus.complianceGracePeriodExpirationDateTime = n.getDateValue() as any ; },
        "deviceDisplayName": n => { iosUpdateDeviceStatus.deviceDisplayName = n.getStringValue() as any ; },
        "deviceId": n => { iosUpdateDeviceStatus.deviceId = n.getStringValue() as any ; },
        "deviceModel": n => { iosUpdateDeviceStatus.deviceModel = n.getStringValue() as any ; },
        "installStatus": n => { iosUpdateDeviceStatus.installStatus = n.getEnumValue<IosUpdatesInstallStatus>(IosUpdatesInstallStatus) as any ; },
        "lastReportedDateTime": n => { iosUpdateDeviceStatus.lastReportedDateTime = n.getDateValue() as any ; },
        "osVersion": n => { iosUpdateDeviceStatus.osVersion = n.getStringValue() as any ; },
        "status": n => { iosUpdateDeviceStatus.status = n.getEnumValue<ComplianceStatus>(ComplianceStatus) as any ; },
        "userId": n => { iosUpdateDeviceStatus.userId = n.getStringValue() as any ; },
        "userName": n => { iosUpdateDeviceStatus.userName = n.getStringValue() as any ; },
        "userPrincipalName": n => { iosUpdateDeviceStatus.userPrincipalName = n.getStringValue() as any ; },
    }
}
