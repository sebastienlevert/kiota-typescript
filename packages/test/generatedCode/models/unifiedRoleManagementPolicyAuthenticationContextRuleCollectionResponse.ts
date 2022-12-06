import {BaseCollectionPaginationCountResponse, UnifiedRoleManagementPolicyAuthenticationContextRule} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicyAuthenticationContextRuleCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UnifiedRoleManagementPolicyAuthenticationContextRule[];
}
