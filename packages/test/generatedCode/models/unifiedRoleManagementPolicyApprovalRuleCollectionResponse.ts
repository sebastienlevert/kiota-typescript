import {BaseCollectionPaginationCountResponse, UnifiedRoleManagementPolicyApprovalRule} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicyApprovalRuleCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UnifiedRoleManagementPolicyApprovalRule[];
}
