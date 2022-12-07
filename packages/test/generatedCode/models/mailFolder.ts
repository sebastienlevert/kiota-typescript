import {Entity, Message, MessageRule, MultiValueLegacyExtendedProperty, SingleValueLegacyExtendedProperty, UserConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MailFolder extends Entity, Partial<Parsable> {
    /** The number of immediate child mailFolders in the current mailFolder. */
    childFolderCount?: number;
    /** The collection of child folders in the mailFolder. */
    childFolders?: MailFolder[];
    /** The mailFolder's display name. */
    displayName?: string;
    /** Indicates whether the mailFolder is hidden. This property can be set only when creating the folder. Find more information in Hidden mail folders. */
    isHidden?: boolean;
    /** The collection of rules that apply to the user's Inbox folder. */
    messageRules?: MessageRule[];
    /** The collection of messages in the mailFolder. */
    messages?: Message[];
    /** The collection of multi-value extended properties defined for the mailFolder. Read-only. Nullable. */
    multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
    /** The unique identifier for the mailFolder's parent mailFolder. */
    parentFolderId?: string;
    /** The collection of single-value extended properties defined for the mailFolder. Read-only. Nullable. */
    singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[];
    /** The number of items in the mailFolder. */
    totalItemCount?: number;
    /** The number of items in the mailFolder marked as unread. */
    unreadItemCount?: number;
    /** The userConfigurations property */
    userConfigurations?: UserConfiguration[];
    /** The well-known folder name for the folder. The possible values are listed above. This property is only set for default folders created by Outlook. For other folders, this property is null. */
    wellKnownName?: string;
}
