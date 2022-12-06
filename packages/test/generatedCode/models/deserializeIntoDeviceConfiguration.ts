import {deserializeIntoDeviceConfigurationAssignment} from './deserializeIntoDeviceConfigurationAssignment';
import {deserializeIntoDeviceConfigurationDeviceOverview} from './deserializeIntoDeviceConfigurationDeviceOverview';
import {deserializeIntoDeviceConfigurationDeviceStatus} from './deserializeIntoDeviceConfigurationDeviceStatus';
import {deserializeIntoDeviceConfigurationUserOverview} from './deserializeIntoDeviceConfigurationUserOverview';
import {deserializeIntoDeviceConfigurationUserStatus} from './deserializeIntoDeviceConfigurationUserStatus';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoSettingStateDeviceSummary} from './deserializeIntoSettingStateDeviceSummary';
import {DeviceConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceConfiguration(deviceConfiguration: DeviceConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceConfiguration),
        "assignments": n => { deviceConfiguration.assignments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceConfigurationAssignment) as any ; },
        "createdDateTime": n => { deviceConfiguration.createdDateTime = n.getDateValue() as any ; },
        "description": n => { deviceConfiguration.description = n.getStringValue() as any ; },
        "deviceSettingStateSummaries": n => { deviceConfiguration.deviceSettingStateSummaries = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSettingStateDeviceSummary) as any ; },
        "deviceStatuses": n => { deviceConfiguration.deviceStatuses = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceConfigurationDeviceStatus) as any ; },
        "deviceStatusOverview": n => { deviceConfiguration.deviceStatusOverview = n.getObject(deserializeIntoDeviceConfigurationDeviceOverview) as any ; },
        "displayName": n => { deviceConfiguration.displayName = n.getStringValue() as any ; },
        "lastModifiedDateTime": n => { deviceConfiguration.lastModifiedDateTime = n.getDateValue() as any ; },
        "userStatuses": n => { deviceConfiguration.userStatuses = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceConfigurationUserStatus) as any ; },
        "userStatusOverview": n => { deviceConfiguration.userStatusOverview = n.getObject(deserializeIntoDeviceConfigurationUserOverview) as any ; },
        "version": n => { deviceConfiguration.version = n.getNumberValue() as any ; },
    }
}
