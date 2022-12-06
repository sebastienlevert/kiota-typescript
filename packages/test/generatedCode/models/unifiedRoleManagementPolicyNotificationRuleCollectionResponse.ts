import {BaseCollectionPaginationCountResponse, UnifiedRoleManagementPolicyNotificationRule} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicyNotificationRuleCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UnifiedRoleManagementPolicyNotificationRule[];
}
