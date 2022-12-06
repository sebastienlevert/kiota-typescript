import {UnifiedRoleManagementPolicyNotificationRuleCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleManagementPolicyNotificationRule} from './serializeUnifiedRoleManagementPolicyNotificationRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleManagementPolicyNotificationRuleCollectionResponse(writer: SerializationWriter, unifiedRoleManagementPolicyNotificationRuleCollectionResponse: UnifiedRoleManagementPolicyNotificationRuleCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleManagementPolicyNotificationRuleCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", unifiedRoleManagementPolicyNotificationRuleCollectionResponse.value as any, serializeUnifiedRoleManagementPolicyNotificationRule);
}
