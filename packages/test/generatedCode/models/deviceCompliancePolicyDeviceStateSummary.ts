import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceCompliancePolicyDeviceStateSummary extends Entity, Partial<Parsable> {
    /** Number of compliant devices */
    compliantDeviceCount?: number;
    /** Number of devices that have compliance managed by System Center Configuration Manager */
    configManagerCount?: number;
    /** Number of conflict devices */
    conflictDeviceCount?: number;
    /** Number of error devices */
    errorDeviceCount?: number;
    /** Number of devices that are in grace period */
    inGracePeriodCount?: number;
    /** Number of NonCompliant devices */
    nonCompliantDeviceCount?: number;
    /** Number of not applicable devices */
    notApplicableDeviceCount?: number;
    /** Number of remediated devices */
    remediatedDeviceCount?: number;
    /** Number of unknown devices */
    unknownDeviceCount?: number;
}
