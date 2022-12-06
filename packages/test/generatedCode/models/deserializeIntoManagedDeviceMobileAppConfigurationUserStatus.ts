import {ComplianceStatus} from './complianceStatus';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ManagedDeviceMobileAppConfigurationUserStatus} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedDeviceMobileAppConfigurationUserStatus(managedDeviceMobileAppConfigurationUserStatus: ManagedDeviceMobileAppConfigurationUserStatus | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedDeviceMobileAppConfigurationUserStatus),
        "devicesCount": n => { managedDeviceMobileAppConfigurationUserStatus.devicesCount = n.getNumberValue() as any ; },
        "lastReportedDateTime": n => { managedDeviceMobileAppConfigurationUserStatus.lastReportedDateTime = n.getDateValue() as any ; },
        "status": n => { managedDeviceMobileAppConfigurationUserStatus.status = n.getEnumValue<ComplianceStatus>(ComplianceStatus) as any ; },
        "userDisplayName": n => { managedDeviceMobileAppConfigurationUserStatus.userDisplayName = n.getStringValue() as any ; },
        "userPrincipalName": n => { managedDeviceMobileAppConfigurationUserStatus.userPrincipalName = n.getStringValue() as any ; },
    }
}
