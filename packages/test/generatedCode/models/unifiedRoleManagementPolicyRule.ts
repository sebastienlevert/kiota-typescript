import {Entity, UnifiedRoleManagementPolicyRuleTarget} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicyRule extends Entity, Partial<Parsable> {
    /** Defines details of scope that's targeted by role management policy rule. The details can include the principal type, the role assignment type, and actions affecting a role. Supports $filter (eq, ne). */
    target?: UnifiedRoleManagementPolicyRuleTarget;
}
