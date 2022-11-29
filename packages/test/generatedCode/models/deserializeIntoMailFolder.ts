import {Entity} from './entity';
import {MailFolder, Message, MessageRule, MultiValueLegacyExtendedProperty, SingleValueLegacyExtendedProperty} from './index';
import {Message} from './message';
import {MessageRule} from './messageRule';
import {MultiValueLegacyExtendedProperty} from './multiValueLegacyExtendedProperty';
import {SingleValueLegacyExtendedProperty} from './singleValueLegacyExtendedProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMailFolder(mailFolder: MailFolder | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntityInterface(mailFolder),
        "childFolderCount": n => { mailFolder.childFolderCount = n.getNumberValue(); },
        "childFolders": n => { mailFolder.childFolders = n.getCollectionOfObjectValuesFromMethod<MailFolder>(deserializeIntoMailFolder); },
        "displayName": n => { mailFolder.displayName = n.getStringValue(); },
        "isHidden": n => { mailFolder.isHidden = n.getBooleanValue(); },
        "messageRules": n => { mailFolder.messageRules = n.getCollectionOfObjectValuesFromMethod<MessageRule>(deserializeIntoMessageRule); },
        "messages": n => { mailFolder.messages = n.getCollectionOfObjectValuesFromMethod<Message>(deserializeIntoMessage); },
        "multiValueExtendedProperties": n => { mailFolder.multiValueExtendedProperties = n.getCollectionOfObjectValuesFromMethod<MultiValueLegacyExtendedProperty>(deserializeIntoMultiValueLegacyExtendedProperty); },
        "parentFolderId": n => { mailFolder.parentFolderId = n.getStringValue(); },
        "singleValueExtendedProperties": n => { mailFolder.singleValueExtendedProperties = n.getCollectionOfObjectValuesFromMethod<SingleValueLegacyExtendedProperty>(deserializeIntoSingleValueLegacyExtendedProperty); },
        "totalItemCount": n => { mailFolder.totalItemCount = n.getNumberValue(); },
        "unreadItemCount": n => { mailFolder.unreadItemCount = n.getNumberValue(); },
    }
}
