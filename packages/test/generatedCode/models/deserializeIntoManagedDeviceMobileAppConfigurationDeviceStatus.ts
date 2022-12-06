import {ComplianceStatus} from './complianceStatus';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ManagedDeviceMobileAppConfigurationDeviceStatus} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedDeviceMobileAppConfigurationDeviceStatus(managedDeviceMobileAppConfigurationDeviceStatus: ManagedDeviceMobileAppConfigurationDeviceStatus | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedDeviceMobileAppConfigurationDeviceStatus),
        "complianceGracePeriodExpirationDateTime": n => { managedDeviceMobileAppConfigurationDeviceStatus.complianceGracePeriodExpirationDateTime = n.getDateValue() as any ; },
        "deviceDisplayName": n => { managedDeviceMobileAppConfigurationDeviceStatus.deviceDisplayName = n.getStringValue() as any ; },
        "deviceModel": n => { managedDeviceMobileAppConfigurationDeviceStatus.deviceModel = n.getStringValue() as any ; },
        "lastReportedDateTime": n => { managedDeviceMobileAppConfigurationDeviceStatus.lastReportedDateTime = n.getDateValue() as any ; },
        "status": n => { managedDeviceMobileAppConfigurationDeviceStatus.status = n.getEnumValue<ComplianceStatus>(ComplianceStatus) as any ; },
        "userName": n => { managedDeviceMobileAppConfigurationDeviceStatus.userName = n.getStringValue() as any ; },
        "userPrincipalName": n => { managedDeviceMobileAppConfigurationDeviceStatus.userPrincipalName = n.getStringValue() as any ; },
    }
}
