import {BaseCollectionPaginationCountResponse, UnifiedRoleManagementPolicyAssignment} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicyAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UnifiedRoleManagementPolicyAssignment[];
}
