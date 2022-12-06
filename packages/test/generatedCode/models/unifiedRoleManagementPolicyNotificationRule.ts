import {UnifiedRoleManagementPolicyRule} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleManagementPolicyNotificationRule extends Partial<Parsable>, UnifiedRoleManagementPolicyRule {
    /** Indicates whether a default recipient will receive the notification email. */
    isDefaultRecipientsEnabled?: boolean;
    /** The level of notification. The possible values are None, Critical, All. */
    notificationLevel?: string;
    /** The list of recipients of the email notifications. */
    notificationRecipients?: string[];
    /** The type of notification. Only Email is supported. */
    notificationType?: string;
    /** The type of recipient of the notification. The possible values are Requestor, Approver, Admin. */
    recipientType?: string;
}
