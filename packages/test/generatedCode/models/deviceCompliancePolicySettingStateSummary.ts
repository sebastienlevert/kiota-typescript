import {DeviceComplianceSettingState, Entity} from './index';
import {PolicyPlatformType} from './policyPlatformType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceCompliancePolicySettingStateSummary extends Entity, Partial<Parsable> {
    /** Number of compliant devices */
    compliantDeviceCount?: number;
    /** Number of conflict devices */
    conflictDeviceCount?: number;
    /** Not yet documented */
    deviceComplianceSettingStates?: DeviceComplianceSettingState[];
    /** Number of error devices */
    errorDeviceCount?: number;
    /** Number of NonCompliant devices */
    nonCompliantDeviceCount?: number;
    /** Number of not applicable devices */
    notApplicableDeviceCount?: number;
    /** Supported platform types for policies. */
    platformType?: PolicyPlatformType;
    /** Number of remediated devices */
    remediatedDeviceCount?: number;
    /** The setting class name and property name. */
    setting?: string;
    /** Name of the setting. */
    settingName?: string;
    /** Number of unknown devices */
    unknownDeviceCount?: number;
}
