import {ComplianceStatus} from './complianceStatus';
import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationUserStatus extends Entity, Partial<Parsable> {
    /** Devices count for that user. */
    devicesCount?: number;
    /** Last modified date time of the policy report. */
    lastReportedDateTime?: Date;
    /** The status property */
    status?: ComplianceStatus;
    /** User name of the DevicePolicyStatus. */
    userDisplayName?: string;
    /** UserPrincipalName. */
    userPrincipalName?: string;
}
