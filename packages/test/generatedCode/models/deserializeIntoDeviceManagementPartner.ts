import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceManagementPartnerAppType} from './deviceManagementPartnerAppType';
import {DeviceManagementPartnerTenantState} from './deviceManagementPartnerTenantState';
import {DeviceManagementPartner} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceManagementPartner(deviceManagementPartner: DeviceManagementPartner | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceManagementPartner),
        "displayName": n => { deviceManagementPartner.displayName = n.getStringValue() as any ; },
        "isConfigured": n => { deviceManagementPartner.isConfigured = n.getBooleanValue() as any ; },
        "lastHeartbeatDateTime": n => { deviceManagementPartner.lastHeartbeatDateTime = n.getDateValue() as any ; },
        "partnerAppType": n => { deviceManagementPartner.partnerAppType = n.getEnumValue<DeviceManagementPartnerAppType>(DeviceManagementPartnerAppType) as any ; },
        "partnerState": n => { deviceManagementPartner.partnerState = n.getEnumValue<DeviceManagementPartnerTenantState>(DeviceManagementPartnerTenantState) as any ; },
        "singleTenantAppId": n => { deviceManagementPartner.singleTenantAppId = n.getStringValue() as any ; },
        "whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime": n => { deviceManagementPartner.whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime = n.getDateValue() as any ; },
        "whenPartnerDevicesWillBeRemovedDateTime": n => { deviceManagementPartner.whenPartnerDevicesWillBeRemovedDateTime = n.getDateValue() as any ; },
    }
}
