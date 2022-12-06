import {BaseCollectionPaginationCountResponse, CrossTenantAccessPolicy} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CrossTenantAccessPolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: CrossTenantAccessPolicy[];
}
