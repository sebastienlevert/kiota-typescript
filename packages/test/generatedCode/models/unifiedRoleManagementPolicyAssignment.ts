import {Entity, UnifiedRoleManagementPolicy} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicyAssignment extends Entity, Partial<Parsable> {
    /** The policy that's associated with a policy assignment. Supports $expand and a nested $expand of the rules and effectiveRules relationships for the policy. */
    policy?: UnifiedRoleManagementPolicy;
    /** The id of the policy. Inherited from entity. */
    policyId?: string;
    /** The identifier of the role definition object where the policy applies. If not specified, the policy applies to all roles. Supports $filter (eq). */
    roleDefinitionId?: string;
    /** The identifier of the scope where the policy is assigned.  Can be / for the tenant or a group ID. Required. */
    scopeId?: string;
    /** The type of the scope where the policy is assigned. One of Directory, DirectoryRole. Required. */
    scopeType?: string;
}
