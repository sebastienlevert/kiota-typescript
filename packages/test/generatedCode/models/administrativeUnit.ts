import {DirectoryObject, Extension, ScopedRoleMembership} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AdministrativeUnit extends DirectoryObject, Partial<Parsable> {
    /** An optional description for the administrative unit. Supports $filter (eq, ne, in, startsWith), $search. */
    description?: string;
    /** Display name for the administrative unit. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy. */
    displayName?: string;
    /** The collection of open extensions defined for this administrative unit. Nullable. */
    extensions?: Extension[];
    /** Users and groups that are members of this administrative unit. Supports $expand. */
    members?: DirectoryObject[];
    /** Scoped-role members of this administrative unit. */
    scopedRoleMembers?: ScopedRoleMembership[];
    /** Controls whether the administrative unit and its members are hidden or public. Can be set to HiddenMembership. If not set (value is null), the default behavior is public. When set to HiddenMembership, only members of the administrative unit can list other members of the administrative unit. */
    visibility?: string;
}
