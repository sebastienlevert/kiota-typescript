import {DirectoryRole} from './index';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeScopedRoleMembership} from './serializeScopedRoleMembership';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDirectoryRole(writer: SerializationWriter, directoryRole: DirectoryRole | undefined = {}) : void {
        serializeDirectoryObject(writer, directoryRole)
            writer.writeStringValue("description", directoryRole.description);
            writer.writeStringValue("displayName", directoryRole.displayName);
            writer.writeCollectionOfObjectValuesFromMethod("members", directoryRole.members as any, serializeDirectoryObject);
            writer.writeStringValue("roleTemplateId", directoryRole.roleTemplateId);
            writer.writeCollectionOfObjectValuesFromMethod("scopedMembers", directoryRole.scopedMembers as any, serializeScopedRoleMembership);
}
