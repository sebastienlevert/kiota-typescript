import {deserializeIntoUnifiedRoleManagementPolicyRule} from './deserializeIntoUnifiedRoleManagementPolicyRule';
import {UnifiedRoleManagementPolicyNotificationRule} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRoleManagementPolicyNotificationRule(unifiedRoleManagementPolicyNotificationRule: UnifiedRoleManagementPolicyNotificationRule | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoUnifiedRoleManagementPolicyRule(unifiedRoleManagementPolicyNotificationRule),
        "isDefaultRecipientsEnabled": n => { unifiedRoleManagementPolicyNotificationRule.isDefaultRecipientsEnabled = n.getBooleanValue() as any ; },
        "notificationLevel": n => { unifiedRoleManagementPolicyNotificationRule.notificationLevel = n.getStringValue() as any ; },
        "notificationRecipients": n => { unifiedRoleManagementPolicyNotificationRule.notificationRecipients = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "notificationType": n => { unifiedRoleManagementPolicyNotificationRule.notificationType = n.getStringValue() as any ; },
        "recipientType": n => { unifiedRoleManagementPolicyNotificationRule.recipientType = n.getStringValue() as any ; },
    }
}
