import {ContactFolder} from './index';
import {serializeContact} from './serializeContact';
import {serializeEntity} from './serializeEntity';
import {serializeMultiValueLegacyExtendedProperty} from './serializeMultiValueLegacyExtendedProperty';
import {serializeSingleValueLegacyExtendedProperty} from './serializeSingleValueLegacyExtendedProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContactFolder(writer: SerializationWriter, contactFolder: ContactFolder | undefined = {}) : void {
        serializeEntity(writer, contactFolder)
            writer.writeCollectionOfObjectValuesFromMethod("childFolders", contactFolder.childFolders as any, serializeContactFolder);
            writer.writeCollectionOfObjectValuesFromMethod("contacts", contactFolder.contacts as any, serializeContact);
            writer.writeStringValue("displayName", contactFolder.displayName);
            writer.writeCollectionOfObjectValuesFromMethod("multiValueExtendedProperties", contactFolder.multiValueExtendedProperties as any, serializeMultiValueLegacyExtendedProperty);
            writer.writeStringValue("parentFolderId", contactFolder.parentFolderId);
            writer.writeCollectionOfObjectValuesFromMethod("singleValueExtendedProperties", contactFolder.singleValueExtendedProperties as any, serializeSingleValueLegacyExtendedProperty);
            writer.writeStringValue("wellKnownName", contactFolder.wellKnownName);
}
