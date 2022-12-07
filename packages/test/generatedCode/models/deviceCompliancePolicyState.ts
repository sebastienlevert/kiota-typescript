import {ComplianceStatus} from './complianceStatus';
import {DeviceCompliancePolicySettingState, Entity} from './index';
import {PolicyPlatformType} from './policyPlatformType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceCompliancePolicyState extends Entity, Partial<Parsable> {
    /** The name of the policy for this policyBase */
    displayName?: string;
    /** Supported platform types for policies. */
    platformType?: PolicyPlatformType;
    /** Count of how many setting a policy holds */
    settingCount?: number;
    /** The settingStates property */
    settingStates?: DeviceCompliancePolicySettingState[];
    /** The state property */
    state?: ComplianceStatus;
    /** User unique identifier, must be Guid */
    userId?: string;
    /** User Principal Name */
    userPrincipalName?: string;
    /** The version of the policy */
    version?: number;
}
