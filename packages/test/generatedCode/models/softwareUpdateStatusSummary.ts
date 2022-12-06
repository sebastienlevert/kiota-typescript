import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SoftwareUpdateStatusSummary extends Entity, Partial<Parsable> {
    /** Number of compliant devices. */
    compliantDeviceCount?: number;
    /** Number of compliant users. */
    compliantUserCount?: number;
    /** Number of conflict devices. */
    conflictDeviceCount?: number;
    /** Number of conflict users. */
    conflictUserCount?: number;
    /** The name of the policy. */
    displayName?: string;
    /** Number of devices had error. */
    errorDeviceCount?: number;
    /** Number of users had error. */
    errorUserCount?: number;
    /** Number of non compliant devices. */
    nonCompliantDeviceCount?: number;
    /** Number of non compliant users. */
    nonCompliantUserCount?: number;
    /** Number of not applicable devices. */
    notApplicableDeviceCount?: number;
    /** Number of not applicable users. */
    notApplicableUserCount?: number;
    /** Number of remediated devices. */
    remediatedDeviceCount?: number;
    /** Number of remediated users. */
    remediatedUserCount?: number;
    /** Number of unknown devices. */
    unknownDeviceCount?: number;
    /** Number of unknown users. */
    unknownUserCount?: number;
}
