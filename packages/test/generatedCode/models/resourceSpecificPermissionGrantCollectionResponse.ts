import {BaseCollectionPaginationCountResponse, ResourceSpecificPermissionGrant} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ResourceSpecificPermissionGrantCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ResourceSpecificPermissionGrant[];
}
