import {BaseCollectionPaginationCountResponse, UnifiedRoleManagementPolicyEnablementRule} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicyEnablementRuleCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UnifiedRoleManagementPolicyEnablementRule[];
}
