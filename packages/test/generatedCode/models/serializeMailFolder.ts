import {Entity} from './entity';
import {serializeEntity} from './serializeEntity';
import {MailFolder, Message, MessageRule, MultiValueLegacyExtendedProperty, SingleValueLegacyExtendedProperty} from './index';
import {Message} from './message';
import {MessageRule} from './messageRule';
import {MultiValueLegacyExtendedProperty} from './multiValueLegacyExtendedProperty';
import {SingleValueLegacyExtendedProperty} from './singleValueLegacyExtendedProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMailFolder(writer: SerializationWriter, mailFolder: MailFolder | undefined = {}) : void {
        serializeEntity(mailFolder);
            writer.writeNumberValue("childFolderCount", mailFolder.childFolderCount);
            writer.writeCollectionOfObjectValues<MailFolder>("childFolders", mailFolder.childFolders);
            writer.writeStringValue("displayName", mailFolder.displayName);
            writer.writeBooleanValue("isHidden", mailFolder.isHidden);
            writer.writeCollectionOfObjectValues<MessageRule>("messageRules", mailFolder.messageRules);
            writer.writeCollectionOfObjectValues<Message>("messages", mailFolder.messages);
            writer.writeCollectionOfObjectValues<MultiValueLegacyExtendedProperty>("multiValueExtendedProperties", mailFolder.multiValueExtendedProperties);
            writer.writeStringValue("parentFolderId", mailFolder.parentFolderId);
            writer.writeCollectionOfObjectValues<SingleValueLegacyExtendedProperty>("singleValueExtendedProperties", mailFolder.singleValueExtendedProperties);
            writer.writeNumberValue("totalItemCount", mailFolder.totalItemCount);
            writer.writeNumberValue("unreadItemCount", mailFolder.unreadItemCount);
}
