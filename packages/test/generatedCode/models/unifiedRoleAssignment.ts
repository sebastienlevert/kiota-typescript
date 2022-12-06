import {AppScope, DirectoryObject, Entity, UnifiedRoleDefinition} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleAssignment extends Entity, Partial<Parsable> {
    /** Read-only property with details of the app specific scope when the assignment scope is app specific. Containment entity. Supports $expand. */
    appScope?: AppScope;
    /** Identifier of the app-specific scope when the assignment scope is app-specific.  Either this property or directoryScopeId is required. App scopes are scopes that are defined and understood by this application only. Use / for tenant-wide app scopes. Use directoryScopeId to limit the scope to particular directory objects, for example, administrative units. Supports $filter (eq, in). */
    appScopeId?: string;
    /** The condition property */
    condition?: string;
    /** The directory object that is the scope of the assignment. Read-only. Supports $expand. */
    directoryScope?: DirectoryObject;
    /** Identifier of the directory object representing the scope of the assignment.  Either this property or appScopeId is required. The scope of an assignment determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. Use appScopeId to limit the scope to an application only. Supports $filter (eq, in). */
    directoryScopeId?: string;
    /** Referencing the assigned principal. Read-only. Supports $expand. */
    principal?: DirectoryObject;
    /** Identifier of the principal to which the assignment is granted. Supports $filter (eq, in). */
    principalId?: string;
    /** The roleDefinition the assignment is for.  Supports $expand. roleDefinition.Id will be auto expanded. */
    roleDefinition?: UnifiedRoleDefinition;
    /** Identifier of the role definition the assignment is for. Read only. Supports $filter (eq, in). */
    roleDefinitionId?: string;
}
