import {DeviceConfigurationAssignment, DeviceConfigurationDeviceOverview, DeviceConfigurationDeviceStatus, DeviceConfigurationUserOverview, DeviceConfigurationUserStatus, Entity, SettingStateDeviceSummary} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceConfiguration extends Entity, Partial<Parsable> {
    /** The list of assignments for the device configuration profile. */
    assignments?: DeviceConfigurationAssignment[];
    /** DateTime the object was created. */
    createdDateTime?: Date;
    /** Admin provided description of the Device Configuration. */
    description?: string;
    /** Device Configuration Setting State Device Summary */
    deviceSettingStateSummaries?: SettingStateDeviceSummary[];
    /** Device configuration installation status by device. */
    deviceStatuses?: DeviceConfigurationDeviceStatus[];
    /** Device Configuration devices status overview */
    deviceStatusOverview?: DeviceConfigurationDeviceOverview;
    /** Admin provided name of the device configuration. */
    displayName?: string;
    /** DateTime the object was last modified. */
    lastModifiedDateTime?: Date;
    /** Device configuration installation status by user. */
    userStatuses?: DeviceConfigurationUserStatus[];
    /** Device Configuration users status overview */
    userStatusOverview?: DeviceConfigurationUserOverview;
    /** Version of the device configuration. */
    version?: number;
}
