import {DirectoryRoleTemplate} from './index';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDirectoryRoleTemplate(writer: SerializationWriter, directoryRoleTemplate: DirectoryRoleTemplate | undefined = {}) : void {
        serializeDirectoryObject(writer, directoryRoleTemplate)
            writer.writeStringValue("description", directoryRoleTemplate.description);
            writer.writeStringValue("displayName", directoryRoleTemplate.displayName);
}
