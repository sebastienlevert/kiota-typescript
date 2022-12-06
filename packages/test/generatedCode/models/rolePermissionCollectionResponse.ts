import {BaseCollectionPaginationCountResponse, RolePermission} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RolePermissionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: RolePermission[];
}
