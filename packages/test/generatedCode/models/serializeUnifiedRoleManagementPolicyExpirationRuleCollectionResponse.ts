import {UnifiedRoleManagementPolicyExpirationRuleCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleManagementPolicyExpirationRule} from './serializeUnifiedRoleManagementPolicyExpirationRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleManagementPolicyExpirationRuleCollectionResponse(writer: SerializationWriter, unifiedRoleManagementPolicyExpirationRuleCollectionResponse: UnifiedRoleManagementPolicyExpirationRuleCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleManagementPolicyExpirationRuleCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", unifiedRoleManagementPolicyExpirationRuleCollectionResponse.value as any, serializeUnifiedRoleManagementPolicyExpirationRule);
}
