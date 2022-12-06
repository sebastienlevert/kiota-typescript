import {BaseCollectionPaginationCountResponse, PermissionScope} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PermissionScopeCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: PermissionScope[];
}
