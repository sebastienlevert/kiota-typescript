import {DeviceConfiguration} from './index';
import {serializeDeviceConfigurationAssignment} from './serializeDeviceConfigurationAssignment';
import {serializeDeviceConfigurationDeviceOverview} from './serializeDeviceConfigurationDeviceOverview';
import {serializeDeviceConfigurationDeviceStatus} from './serializeDeviceConfigurationDeviceStatus';
import {serializeDeviceConfigurationUserOverview} from './serializeDeviceConfigurationUserOverview';
import {serializeDeviceConfigurationUserStatus} from './serializeDeviceConfigurationUserStatus';
import {serializeEntity} from './serializeEntity';
import {serializeSettingStateDeviceSummary} from './serializeSettingStateDeviceSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceConfiguration(writer: SerializationWriter, deviceConfiguration: DeviceConfiguration | undefined = {}) : void {
        serializeEntity(writer, deviceConfiguration)
            writer.writeCollectionOfObjectValuesFromMethod("assignments", deviceConfiguration.assignments as any, serializeDeviceConfigurationAssignment);
            writer.writeDateValue("createdDateTime", deviceConfiguration.createdDateTime);
            writer.writeStringValue("description", deviceConfiguration.description);
            writer.writeCollectionOfObjectValuesFromMethod("deviceSettingStateSummaries", deviceConfiguration.deviceSettingStateSummaries as any, serializeSettingStateDeviceSummary);
            writer.writeCollectionOfObjectValuesFromMethod("deviceStatuses", deviceConfiguration.deviceStatuses as any, serializeDeviceConfigurationDeviceStatus);
            writer.writeObjectValueFromMethod("deviceStatusOverview", deviceConfiguration.deviceStatusOverview as any, serializeDeviceConfigurationDeviceOverview);
            writer.writeStringValue("displayName", deviceConfiguration.displayName);
            writer.writeDateValue("lastModifiedDateTime", deviceConfiguration.lastModifiedDateTime);
            writer.writeCollectionOfObjectValuesFromMethod("userStatuses", deviceConfiguration.userStatuses as any, serializeDeviceConfigurationUserStatus);
            writer.writeObjectValueFromMethod("userStatusOverview", deviceConfiguration.userStatusOverview as any, serializeDeviceConfigurationUserOverview);
            writer.writeNumberValue("version", deviceConfiguration.version);
}
