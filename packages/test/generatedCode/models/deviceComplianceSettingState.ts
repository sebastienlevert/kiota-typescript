import {ComplianceStatus} from './complianceStatus';
import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceComplianceSettingState extends Entity, Partial<Parsable> {
    /** The DateTime when device compliance grace period expires */
    complianceGracePeriodExpirationDateTime?: Date;
    /** The Device Id that is being reported */
    deviceId?: string;
    /** The device model that is being reported */
    deviceModel?: string;
    /** The Device Name that is being reported */
    deviceName?: string;
    /** The setting class name and property name. */
    setting?: string;
    /** The Setting Name that is being reported */
    settingName?: string;
    /** The state property */
    state?: ComplianceStatus;
    /** The User email address that is being reported */
    userEmail?: string;
    /** The user Id that is being reported */
    userId?: string;
    /** The User Name that is being reported */
    userName?: string;
    /** The User PrincipalName that is being reported */
    userPrincipalName?: string;
}
