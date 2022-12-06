import {UnifiedRoleManagementPolicyExpirationRule} from './index';
import {serializeUnifiedRoleManagementPolicyRule} from './serializeUnifiedRoleManagementPolicyRule';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleManagementPolicyExpirationRule(writer: SerializationWriter, unifiedRoleManagementPolicyExpirationRule: UnifiedRoleManagementPolicyExpirationRule | undefined = {}) : void {
        serializeUnifiedRoleManagementPolicyRule(writer, unifiedRoleManagementPolicyExpirationRule)
            writer.writeBooleanValue("isExpirationRequired", unifiedRoleManagementPolicyExpirationRule.isExpirationRequired);
            writer.writeDurationValue("maximumDuration", unifiedRoleManagementPolicyExpirationRule.maximumDuration);
}
