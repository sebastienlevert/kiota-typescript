import {UnifiedRoleManagementPolicyAuthenticationContextRule} from './index';
import {serializeUnifiedRoleManagementPolicyRule} from './serializeUnifiedRoleManagementPolicyRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleManagementPolicyAuthenticationContextRule(writer: SerializationWriter, unifiedRoleManagementPolicyAuthenticationContextRule: UnifiedRoleManagementPolicyAuthenticationContextRule | undefined = {}) : void {
        serializeUnifiedRoleManagementPolicyRule(writer, unifiedRoleManagementPolicyAuthenticationContextRule)
            writer.writeStringValue("claimValue", unifiedRoleManagementPolicyAuthenticationContextRule.claimValue);
            writer.writeBooleanValue("isEnabled", unifiedRoleManagementPolicyAuthenticationContextRule.isEnabled);
}
