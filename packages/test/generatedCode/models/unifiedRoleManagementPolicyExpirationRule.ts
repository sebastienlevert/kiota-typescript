import {UnifiedRoleManagementPolicyRule} from './index';
import {Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicyExpirationRule extends Partial<Parsable>, UnifiedRoleManagementPolicyRule {
    /** Indicates whether expiration is required or if it's a permanently active assignment or eligibility. */
    isExpirationRequired?: boolean;
    /** The maximum duration allowed for eligibility or assignment which is not permanent. Required when isExpirationRequired is true. */
    maximumDuration?: Duration;
}
