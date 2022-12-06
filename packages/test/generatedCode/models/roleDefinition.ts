import {Entity, RoleAssignment, RolePermission} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RoleDefinition extends Entity, Partial<Parsable> {
    /** Description of the Role definition. */
    description?: string;
    /** Display Name of the Role definition. */
    displayName?: string;
    /** Type of Role. Set to True if it is built-in, or set to False if it is a custom role definition. */
    isBuiltIn?: boolean;
    /** List of Role assignments for this role definition. */
    roleAssignments?: RoleAssignment[];
    /** List of Role Permissions this role is allowed to perform. These must match the actionName that is defined as part of the rolePermission. */
    rolePermissions?: RolePermission[];
}
