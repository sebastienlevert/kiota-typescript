import {CrossTenantAccessPolicyConfigurationDefault, CrossTenantAccessPolicyConfigurationPartner, PolicyBase} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CrossTenantAccessPolicy extends Partial<Parsable>, PolicyBase {
    /** The allowedCloudEndpoints property */
    allowedCloudEndpoints?: string[];
    /** Defines the default configuration for how your organization interacts with external Azure Active Directory organizations. */
    default_escaped?: CrossTenantAccessPolicyConfigurationDefault;
    /** Defines partner-specific configurations for external Azure Active Directory organizations. */
    partners?: CrossTenantAccessPolicyConfigurationPartner[];
}
