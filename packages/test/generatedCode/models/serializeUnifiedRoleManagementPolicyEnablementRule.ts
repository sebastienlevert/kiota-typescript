import {UnifiedRoleManagementPolicyEnablementRule} from './index';
import {serializeUnifiedRoleManagementPolicyRule} from './serializeUnifiedRoleManagementPolicyRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleManagementPolicyEnablementRule(writer: SerializationWriter, unifiedRoleManagementPolicyEnablementRule: UnifiedRoleManagementPolicyEnablementRule | undefined = {}) : void {
        serializeUnifiedRoleManagementPolicyRule(writer, unifiedRoleManagementPolicyEnablementRule)
            writer.writeCollectionOfPrimitiveValues<string>("enabledRules", unifiedRoleManagementPolicyEnablementRule.enabledRules);
}
