import {ComplianceStatus} from './complianceStatus';
import {DeviceConfigurationSettingState, Entity} from './index';
import {PolicyPlatformType} from './policyPlatformType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationState extends Entity, Partial<Parsable> {
    /** The name of the policy for this policyBase */
    displayName?: string;
    /** Supported platform types for policies. */
    platformType?: PolicyPlatformType;
    /** Count of how many setting a policy holds */
    settingCount?: number;
    /** The settingStates property */
    settingStates?: DeviceConfigurationSettingState[];
    /** The state property */
    state?: ComplianceStatus;
    /** User unique identifier, must be Guid */
    userId?: string;
    /** User Principal Name */
    userPrincipalName?: string;
    /** The version of the policy */
    version?: number;
}
