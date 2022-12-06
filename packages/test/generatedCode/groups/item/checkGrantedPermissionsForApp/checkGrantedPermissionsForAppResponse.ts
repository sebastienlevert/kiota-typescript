import {BaseCollectionPaginationCountResponse, ResourceSpecificPermissionGrant} from '../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CheckGrantedPermissionsForAppResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ResourceSpecificPermissionGrant[];
}
