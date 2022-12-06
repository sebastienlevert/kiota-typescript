import {UnifiedRoleManagementPolicyEnablementRuleCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleManagementPolicyEnablementRule} from './serializeUnifiedRoleManagementPolicyEnablementRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleManagementPolicyEnablementRuleCollectionResponse(writer: SerializationWriter, unifiedRoleManagementPolicyEnablementRuleCollectionResponse: UnifiedRoleManagementPolicyEnablementRuleCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleManagementPolicyEnablementRuleCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", unifiedRoleManagementPolicyEnablementRuleCollectionResponse.value as any, serializeUnifiedRoleManagementPolicyEnablementRule);
}
