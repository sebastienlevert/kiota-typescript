import {BaseCollectionPaginationCountResponse, OAuth2PermissionGrant} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OAuth2PermissionGrantCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: OAuth2PermissionGrant[];
}
