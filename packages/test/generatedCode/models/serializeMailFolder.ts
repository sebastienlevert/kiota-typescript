import {MailFolder} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeMessage} from './serializeMessage';
import {serializeMessageRule} from './serializeMessageRule';
import {serializeMultiValueLegacyExtendedProperty} from './serializeMultiValueLegacyExtendedProperty';
import {serializeSingleValueLegacyExtendedProperty} from './serializeSingleValueLegacyExtendedProperty';
import {serializeUserConfiguration} from './serializeUserConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMailFolder(writer: SerializationWriter, mailFolder: MailFolder | undefined = {}) : void {
        serializeEntity(writer, mailFolder)
            writer.writeNumberValue("childFolderCount", mailFolder.childFolderCount);
            writer.writeCollectionOfObjectValuesFromMethod("childFolders", mailFolder.childFolders as any, serializeMailFolder);
            writer.writeStringValue("displayName", mailFolder.displayName);
            writer.writeBooleanValue("isHidden", mailFolder.isHidden);
            writer.writeCollectionOfObjectValuesFromMethod("messageRules", mailFolder.messageRules as any, serializeMessageRule);
            writer.writeCollectionOfObjectValuesFromMethod("messages", mailFolder.messages as any, serializeMessage);
            writer.writeCollectionOfObjectValuesFromMethod("multiValueExtendedProperties", mailFolder.multiValueExtendedProperties as any, serializeMultiValueLegacyExtendedProperty);
            writer.writeStringValue("parentFolderId", mailFolder.parentFolderId);
            writer.writeCollectionOfObjectValuesFromMethod("singleValueExtendedProperties", mailFolder.singleValueExtendedProperties as any, serializeSingleValueLegacyExtendedProperty);
            writer.writeNumberValue("totalItemCount", mailFolder.totalItemCount);
            writer.writeNumberValue("unreadItemCount", mailFolder.unreadItemCount);
            writer.writeCollectionOfObjectValuesFromMethod("userConfigurations", mailFolder.userConfigurations as any, serializeUserConfiguration);
            writer.writeStringValue("wellKnownName", mailFolder.wellKnownName);
}
