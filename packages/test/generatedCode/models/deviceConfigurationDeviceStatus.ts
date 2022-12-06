import {ComplianceStatus} from './complianceStatus';
import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationDeviceStatus extends Entity, Partial<Parsable> {
    /** The DateTime when device compliance grace period expires */
    complianceGracePeriodExpirationDateTime?: Date;
    /** Device name of the DevicePolicyStatus. */
    deviceDisplayName?: string;
    /** The device model that is being reported */
    deviceModel?: string;
    /** Last modified date time of the policy report. */
    lastReportedDateTime?: Date;
    /** The status property */
    status?: ComplianceStatus;
    /** The User Name that is being reported */
    userName?: string;
    /** UserPrincipalName. */
    userPrincipalName?: string;
}
