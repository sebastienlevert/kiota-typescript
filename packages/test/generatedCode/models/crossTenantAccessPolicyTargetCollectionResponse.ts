import {BaseCollectionPaginationCountResponse, CrossTenantAccessPolicyTarget} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CrossTenantAccessPolicyTargetCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: CrossTenantAccessPolicyTarget[];
}
