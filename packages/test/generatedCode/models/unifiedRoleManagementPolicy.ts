import {Entity, Identity, UnifiedRoleManagementPolicyRule} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicy extends Entity, Partial<Parsable> {
    /** Description for the policy. */
    description?: string;
    /** Display name for the policy. */
    displayName?: string;
    /** The list of effective rules like approval rules and expiration rules evaluated based on inherited referenced rules. For example, if there is a tenant-wide policy to enforce enabling an approval rule, the effective rule will be to enable approval even if the policy has a rule to disable approval. Supports $expand. */
    effectiveRules?: UnifiedRoleManagementPolicyRule[];
    /** This can only be set to true for a single tenant-wide policy which will apply to all scopes and roles. Set the scopeId to / and scopeType to Directory. Supports $filter (eq, ne). */
    isOrganizationDefault?: boolean;
    /** The identity who last modified the role setting. */
    lastModifiedBy?: Identity;
    /** The time when the role setting was last modified. */
    lastModifiedDateTime?: Date;
    /** The collection of rules like approval rules and expiration rules. Supports $expand. */
    rules?: UnifiedRoleManagementPolicyRule[];
    /** The identifier of the scope where the policy is created. Can be / for the tenant or a group ID. Required. */
    scopeId?: string;
    /** The type of the scope where the policy is created. One of Directory, DirectoryRole. Required. */
    scopeType?: string;
}
