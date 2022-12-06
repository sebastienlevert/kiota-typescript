import {DeviceManagementPartnerAppType} from './deviceManagementPartnerAppType';
import {DeviceManagementPartnerTenantState} from './deviceManagementPartnerTenantState';
import {DeviceManagementPartner} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceManagementPartner(writer: SerializationWriter, deviceManagementPartner: DeviceManagementPartner | undefined = {}) : void {
        serializeEntity(writer, deviceManagementPartner)
            writer.writeStringValue("displayName", deviceManagementPartner.displayName);
            writer.writeBooleanValue("isConfigured", deviceManagementPartner.isConfigured);
            writer.writeDateValue("lastHeartbeatDateTime", deviceManagementPartner.lastHeartbeatDateTime);
            writer.writeEnumValue<DeviceManagementPartnerAppType>("partnerAppType", deviceManagementPartner.partnerAppType);
            writer.writeEnumValue<DeviceManagementPartnerTenantState>("partnerState", deviceManagementPartner.partnerState);
            writer.writeStringValue("singleTenantAppId", deviceManagementPartner.singleTenantAppId);
            writer.writeDateValue("whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime", deviceManagementPartner.whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime);
            writer.writeDateValue("whenPartnerDevicesWillBeRemovedDateTime", deviceManagementPartner.whenPartnerDevicesWillBeRemovedDateTime);
}
