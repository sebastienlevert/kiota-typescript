import {BaseCollectionPaginationCountResponse, UnifiedRoleManagementPolicyExpirationRule} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicyExpirationRuleCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UnifiedRoleManagementPolicyExpirationRule[];
}
