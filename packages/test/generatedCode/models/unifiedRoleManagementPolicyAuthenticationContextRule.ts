import {UnifiedRoleManagementPolicyRule} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicyAuthenticationContextRule extends Partial<Parsable>, UnifiedRoleManagementPolicyRule {
    /** The value of the authentication context claim. */
    claimValue?: string;
    /** Whether this rule is enabled. */
    isEnabled?: boolean;
}
