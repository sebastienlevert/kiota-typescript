import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {UnifiedRoleManagementPolicyRuleTarget} from './index';
import {UnifiedRoleManagementPolicyRuleTargetOperations} from './unifiedRoleManagementPolicyRuleTargetOperations';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleManagementPolicyRuleTarget(unifiedRoleManagementPolicyRuleTarget: UnifiedRoleManagementPolicyRuleTarget | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "caller": n => { unifiedRoleManagementPolicyRuleTarget.caller = n.getStringValue() as any ; },
        "enforcedSettings": n => { unifiedRoleManagementPolicyRuleTarget.enforcedSettings = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "inheritableSettings": n => { unifiedRoleManagementPolicyRuleTarget.inheritableSettings = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "level": n => { unifiedRoleManagementPolicyRuleTarget.level = n.getStringValue() as any ; },
        "@odata.type": n => { unifiedRoleManagementPolicyRuleTarget.odataType = n.getStringValue() as any ; },
        "operations": n => { unifiedRoleManagementPolicyRuleTarget.operations = n.getEnumValues<UnifiedRoleManagementPolicyRuleTargetOperations>(UnifiedRoleManagementPolicyRuleTargetOperations) as any ; },
        "targetObjects": n => { unifiedRoleManagementPolicyRuleTarget.targetObjects = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
    }
}
