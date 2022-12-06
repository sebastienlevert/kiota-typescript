import {UnifiedRoleManagementPolicyApprovalRuleCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleManagementPolicyApprovalRule} from './serializeUnifiedRoleManagementPolicyApprovalRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleManagementPolicyApprovalRuleCollectionResponse(writer: SerializationWriter, unifiedRoleManagementPolicyApprovalRuleCollectionResponse: UnifiedRoleManagementPolicyApprovalRuleCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleManagementPolicyApprovalRuleCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", unifiedRoleManagementPolicyApprovalRuleCollectionResponse.value as any, serializeUnifiedRoleManagementPolicyApprovalRule);
}
