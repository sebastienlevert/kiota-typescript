import {UnifiedRoleManagementPolicyRuleCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleManagementPolicyRule} from './serializeUnifiedRoleManagementPolicyRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleManagementPolicyRuleCollectionResponse(writer: SerializationWriter, unifiedRoleManagementPolicyRuleCollectionResponse: UnifiedRoleManagementPolicyRuleCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleManagementPolicyRuleCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", unifiedRoleManagementPolicyRuleCollectionResponse.value as any, serializeUnifiedRoleManagementPolicyRule);
}
