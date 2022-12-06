import {UnifiedRoleManagementPolicyAuthenticationContextRuleCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleManagementPolicyAuthenticationContextRule} from './serializeUnifiedRoleManagementPolicyAuthenticationContextRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleManagementPolicyAuthenticationContextRuleCollectionResponse(writer: SerializationWriter, unifiedRoleManagementPolicyAuthenticationContextRuleCollectionResponse: UnifiedRoleManagementPolicyAuthenticationContextRuleCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleManagementPolicyAuthenticationContextRuleCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", unifiedRoleManagementPolicyAuthenticationContextRuleCollectionResponse.value as any, serializeUnifiedRoleManagementPolicyAuthenticationContextRule);
}
