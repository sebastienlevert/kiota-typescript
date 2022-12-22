import {MailFolder} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeMessage} from './serializeMessage';
import {serializeMessageRule} from './serializeMessageRule';
import {serializeMultiValueLegacyExtendedProperty} from './serializeMultiValueLegacyExtendedProperty';
import {serializeSingleValueLegacyExtendedProperty} from './serializeSingleValueLegacyExtendedProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMailFolder(writer: SerializationWriter, mailFolder: MailFolder | undefined = {}) : void {
        serializeEntity(writer, mailFolder)
            writer.writeNumberValue("childFolderCount", mailFolder.childFolderCount);
            writer.writeCollectionOfObjectValues("childFolders", mailFolder.childFolders as any, serializeMailFolder);
            writer.writeStringValue("displayName", mailFolder.displayName);
            writer.writeBooleanValue("isHidden", mailFolder.isHidden);
            writer.writeCollectionOfObjectValues("messageRules", mailFolder.messageRules as any, serializeMessageRule);
            writer.writeCollectionOfObjectValues("messages", mailFolder.messages as any, serializeMessage);
            writer.writeCollectionOfObjectValues("multiValueExtendedProperties", mailFolder.multiValueExtendedProperties as any, serializeMultiValueLegacyExtendedProperty);
            writer.writeStringValue("parentFolderId", mailFolder.parentFolderId);
            writer.writeCollectionOfObjectValues("singleValueExtendedProperties", mailFolder.singleValueExtendedProperties as any, serializeSingleValueLegacyExtendedProperty);
            writer.writeNumberValue("totalItemCount", mailFolder.totalItemCount);
            writer.writeNumberValue("unreadItemCount", mailFolder.unreadItemCount);
}
