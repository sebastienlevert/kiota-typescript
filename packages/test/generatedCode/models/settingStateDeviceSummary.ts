import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SettingStateDeviceSummary extends Entity, Partial<Parsable> {
    /** Device Compliant count for the setting */
    compliantDeviceCount?: number;
    /** Device conflict error count for the setting */
    conflictDeviceCount?: number;
    /** Device error count for the setting */
    errorDeviceCount?: number;
    /** Name of the InstancePath for the setting */
    instancePath?: string;
    /** Device NonCompliant count for the setting */
    nonCompliantDeviceCount?: number;
    /** Device Not Applicable count for the setting */
    notApplicableDeviceCount?: number;
    /** Device Compliant count for the setting */
    remediatedDeviceCount?: number;
    /** Name of the setting */
    settingName?: string;
    /** Device Unkown count for the setting */
    unknownDeviceCount?: number;
}
