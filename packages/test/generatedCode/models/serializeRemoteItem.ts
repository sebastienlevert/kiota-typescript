import {RemoteItem} from './index';
import {serializeFile} from './serializeFile';
import {serializeFileSystemInfo} from './serializeFileSystemInfo';
import {serializeFolder} from './serializeFolder';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeImage} from './serializeImage';
import {serializeItemReference} from './serializeItemReference';
import {serializePackage} from './serializePackage';
import {serializeShared} from './serializeShared';
import {serializeSharepointIds} from './serializeSharepointIds';
import {serializeSpecialFolder} from './serializeSpecialFolder';
import {serializeVideo} from './serializeVideo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRemoteItem(writer: SerializationWriter, remoteItem: RemoteItem | undefined = {}) : void {
            writer.writeObjectValueFromMethod("createdBy", remoteItem.createdBy as any, serializeIdentitySet);
            writer.writeDateValue("createdDateTime", remoteItem.createdDateTime);
            writer.writeObjectValueFromMethod("file", remoteItem.file as any, serializeFile);
            writer.writeObjectValueFromMethod("fileSystemInfo", remoteItem.fileSystemInfo as any, serializeFileSystemInfo);
            writer.writeObjectValueFromMethod("folder", remoteItem.folder as any, serializeFolder);
            writer.writeStringValue("id", remoteItem.id);
            writer.writeObjectValueFromMethod("image", remoteItem.image as any, serializeImage);
            writer.writeObjectValueFromMethod("lastModifiedBy", remoteItem.lastModifiedBy as any, serializeIdentitySet);
            writer.writeDateValue("lastModifiedDateTime", remoteItem.lastModifiedDateTime);
            writer.writeStringValue("name", remoteItem.name);
            writer.writeObjectValueFromMethod("package", remoteItem.package as any, serializePackage);
            writer.writeObjectValueFromMethod("parentReference", remoteItem.parentReference as any, serializeItemReference);
            writer.writeObjectValueFromMethod("shared", remoteItem.shared as any, serializeShared);
            writer.writeObjectValueFromMethod("sharepointIds", remoteItem.sharepointIds as any, serializeSharepointIds);
            writer.writeNumberValue("size", remoteItem.size);
            writer.writeObjectValueFromMethod("specialFolder", remoteItem.specialFolder as any, serializeSpecialFolder);
            writer.writeObjectValueFromMethod("video", remoteItem.video as any, serializeVideo);
            writer.writeStringValue("webDavUrl", remoteItem.webDavUrl);
            writer.writeStringValue("webUrl", remoteItem.webUrl);
}
