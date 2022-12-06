import {DeviceComplianceDeviceOverview, DeviceComplianceDeviceStatus, DeviceCompliancePolicyAssignment, DeviceComplianceScheduledActionForRule, DeviceComplianceUserOverview, DeviceComplianceUserStatus, Entity, SettingStateDeviceSummary} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceCompliancePolicy extends Entity, Partial<Parsable> {
    /** The collection of assignments for this compliance policy. */
    assignments?: DeviceCompliancePolicyAssignment[];
    /** DateTime the object was created. */
    createdDateTime?: Date;
    /** Admin provided description of the Device Configuration. */
    description?: string;
    /** Compliance Setting State Device Summary */
    deviceSettingStateSummaries?: SettingStateDeviceSummary[];
    /** List of DeviceComplianceDeviceStatus. */
    deviceStatuses?: DeviceComplianceDeviceStatus[];
    /** Device compliance devices status overview */
    deviceStatusOverview?: DeviceComplianceDeviceOverview;
    /** Admin provided name of the device configuration. */
    displayName?: string;
    /** DateTime the object was last modified. */
    lastModifiedDateTime?: Date;
    /** The list of scheduled action per rule for this compliance policy. This is a required property when creating any individual per-platform compliance policies. */
    scheduledActionsForRule?: DeviceComplianceScheduledActionForRule[];
    /** List of DeviceComplianceUserStatus. */
    userStatuses?: DeviceComplianceUserStatus[];
    /** Device compliance users status overview */
    userStatusOverview?: DeviceComplianceUserOverview;
    /** Version of the device configuration. */
    version?: number;
}
