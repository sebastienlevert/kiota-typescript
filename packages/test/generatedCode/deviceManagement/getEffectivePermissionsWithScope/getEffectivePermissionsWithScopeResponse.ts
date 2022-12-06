import {BaseCollectionPaginationCountResponse, RolePermission} from '../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetEffectivePermissionsWithScopeResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: RolePermission[];
}
