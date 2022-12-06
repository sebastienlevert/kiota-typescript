import {BaseCollectionPaginationCountResponse, PermissionGrantPolicy} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PermissionGrantPolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: PermissionGrantPolicy[];
}
