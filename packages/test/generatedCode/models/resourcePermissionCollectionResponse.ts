import {BaseCollectionPaginationCountResponse, ResourcePermission} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ResourcePermissionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ResourcePermission[];
}
