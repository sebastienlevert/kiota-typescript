import {ManagedDeviceMobileAppConfiguration} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeManagedDeviceMobileAppConfigurationAssignment} from './serializeManagedDeviceMobileAppConfigurationAssignment';
import {serializeManagedDeviceMobileAppConfigurationDeviceStatus} from './serializeManagedDeviceMobileAppConfigurationDeviceStatus';
import {serializeManagedDeviceMobileAppConfigurationDeviceSummary} from './serializeManagedDeviceMobileAppConfigurationDeviceSummary';
import {serializeManagedDeviceMobileAppConfigurationUserStatus} from './serializeManagedDeviceMobileAppConfigurationUserStatus';
import {serializeManagedDeviceMobileAppConfigurationUserSummary} from './serializeManagedDeviceMobileAppConfigurationUserSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedDeviceMobileAppConfiguration(writer: SerializationWriter, managedDeviceMobileAppConfiguration: ManagedDeviceMobileAppConfiguration | undefined = {}) : void {
        serializeEntity(writer, managedDeviceMobileAppConfiguration)
            writer.writeCollectionOfObjectValuesFromMethod("assignments", managedDeviceMobileAppConfiguration.assignments as any, serializeManagedDeviceMobileAppConfigurationAssignment);
            writer.writeDateValue("createdDateTime", managedDeviceMobileAppConfiguration.createdDateTime);
            writer.writeStringValue("description", managedDeviceMobileAppConfiguration.description);
            writer.writeCollectionOfObjectValuesFromMethod("deviceStatuses", managedDeviceMobileAppConfiguration.deviceStatuses as any, serializeManagedDeviceMobileAppConfigurationDeviceStatus);
            writer.writeObjectValueFromMethod("deviceStatusSummary", managedDeviceMobileAppConfiguration.deviceStatusSummary as any, serializeManagedDeviceMobileAppConfigurationDeviceSummary);
            writer.writeStringValue("displayName", managedDeviceMobileAppConfiguration.displayName);
            writer.writeDateValue("lastModifiedDateTime", managedDeviceMobileAppConfiguration.lastModifiedDateTime);
            writer.writeCollectionOfPrimitiveValues<string>("targetedMobileApps", managedDeviceMobileAppConfiguration.targetedMobileApps);
            writer.writeCollectionOfObjectValuesFromMethod("userStatuses", managedDeviceMobileAppConfiguration.userStatuses as any, serializeManagedDeviceMobileAppConfigurationUserStatus);
            writer.writeObjectValueFromMethod("userStatusSummary", managedDeviceMobileAppConfiguration.userStatusSummary as any, serializeManagedDeviceMobileAppConfigurationUserSummary);
            writer.writeNumberValue("version", managedDeviceMobileAppConfiguration.version);
}
