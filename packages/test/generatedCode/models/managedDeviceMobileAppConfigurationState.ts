import {ComplianceStatus} from './complianceStatus';
import {Entity, ManagedDeviceMobileAppConfigurationSettingState} from './index';
import {PolicyPlatformType} from './policyPlatformType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedDeviceMobileAppConfigurationState extends Entity, Partial<Parsable> {
    /** The name of the policy for this policyBase */
    displayName?: string;
    /** Supported platform types for policies. */
    platformType?: PolicyPlatformType;
    /** Count of how many setting a policy holds */
    settingCount?: number;
    /** The settingStates property */
    settingStates?: ManagedDeviceMobileAppConfigurationSettingState[];
    /** The state property */
    state?: ComplianceStatus;
    /** User unique identifier, must be Guid */
    userId?: string;
    /** User Principal Name */
    userPrincipalName?: string;
    /** The version of the policy */
    version?: number;
}
