import {Entity, Identity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ScopedRoleMembership extends Entity, Partial<Parsable> {
    /** Unique identifier for the administrative unit that the directory role is scoped to */
    administrativeUnitId?: string;
    /** Unique identifier for the directory role that the member is in. */
    roleId?: string;
    /** The roleMemberInfo property */
    roleMemberInfo?: Identity;
}
