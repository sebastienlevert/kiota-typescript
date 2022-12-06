import {ComplianceStatus} from './complianceStatus';
import {Entity} from './index';
import {IosUpdatesInstallStatus} from './iosUpdatesInstallStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosUpdateDeviceStatus extends Entity, Partial<Parsable> {
    /** The DateTime when device compliance grace period expires */
    complianceGracePeriodExpirationDateTime?: Date;
    /** Device name of the DevicePolicyStatus. */
    deviceDisplayName?: string;
    /** The device id that is being reported. */
    deviceId?: string;
    /** The device model that is being reported */
    deviceModel?: string;
    /** The installStatus property */
    installStatus?: IosUpdatesInstallStatus;
    /** Last modified date time of the policy report. */
    lastReportedDateTime?: Date;
    /** The device version that is being reported. */
    osVersion?: string;
    /** The status property */
    status?: ComplianceStatus;
    /** The User id that is being reported. */
    userId?: string;
    /** The User Name that is being reported */
    userName?: string;
    /** UserPrincipalName. */
    userPrincipalName?: string;
}
