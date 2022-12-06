import {UnifiedRoleManagementPolicyRuleTarget} from './index';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {UnifiedRoleManagementPolicyRuleTargetOperations} from './unifiedRoleManagementPolicyRuleTargetOperations';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleManagementPolicyRuleTarget(writer: SerializationWriter, unifiedRoleManagementPolicyRuleTarget: UnifiedRoleManagementPolicyRuleTarget | undefined = {}) : void {
            writer.writeStringValue("caller", unifiedRoleManagementPolicyRuleTarget.caller);
            writer.writeCollectionOfPrimitiveValues<string>("enforcedSettings", unifiedRoleManagementPolicyRuleTarget.enforcedSettings);
            writer.writeCollectionOfPrimitiveValues<string>("inheritableSettings", unifiedRoleManagementPolicyRuleTarget.inheritableSettings);
            writer.writeStringValue("level", unifiedRoleManagementPolicyRuleTarget.level);
            writer.writeStringValue("@odata.type", unifiedRoleManagementPolicyRuleTarget.odataType);
            writer.writeEnumValue<UnifiedRoleManagementPolicyRuleTargetOperations>("operations", unifiedRoleManagementPolicyRuleTarget.operations);
            writer.writeCollectionOfObjectValuesFromMethod("targetObjects", unifiedRoleManagementPolicyRuleTarget.targetObjects as any, serializeDirectoryObject);
}
