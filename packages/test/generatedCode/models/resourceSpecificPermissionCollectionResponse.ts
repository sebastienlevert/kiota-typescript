import {BaseCollectionPaginationCountResponse, ResourceSpecificPermission} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ResourceSpecificPermissionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ResourceSpecificPermission[];
}
