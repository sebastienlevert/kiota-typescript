import {BaseCollectionPaginationCountResponse, UnifiedRolePermission} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRolePermissionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UnifiedRolePermission[];
}
