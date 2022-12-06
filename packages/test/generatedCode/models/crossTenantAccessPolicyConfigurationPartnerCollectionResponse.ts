import {BaseCollectionPaginationCountResponse, CrossTenantAccessPolicyConfigurationPartner} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CrossTenantAccessPolicyConfigurationPartnerCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: CrossTenantAccessPolicyConfigurationPartner[];
}
