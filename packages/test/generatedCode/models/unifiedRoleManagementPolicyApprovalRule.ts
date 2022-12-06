import {ApprovalSettings, UnifiedRoleManagementPolicyRule} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicyApprovalRule extends Partial<Parsable>, UnifiedRoleManagementPolicyRule {
    /** The settings for approval of the role assignment. */
    setting?: ApprovalSettings;
}
