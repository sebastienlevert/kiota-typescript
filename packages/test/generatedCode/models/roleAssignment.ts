import {Entity, RoleDefinition} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RoleAssignment extends Entity, Partial<Parsable> {
    /** Description of the Role Assignment. */
    description?: string;
    /** The display or friendly name of the role Assignment. */
    displayName?: string;
    /** List of ids of role scope member security groups.  These are IDs from Azure Active Directory. */
    resourceScopes?: string[];
    /** Role definition this assignment is part of. */
    roleDefinition?: RoleDefinition;
}
