import {DriveItemUploadableProperties} from './index';
import {serializeFileSystemInfo} from './serializeFileSystemInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDriveItemUploadableProperties(writer: SerializationWriter, driveItemUploadableProperties: DriveItemUploadableProperties | undefined = {}) : void {
            writer.writeStringValue("description", driveItemUploadableProperties.description);
            writer.writeNumberValue("fileSize", driveItemUploadableProperties.fileSize);
            writer.writeObjectValueFromMethod("fileSystemInfo", driveItemUploadableProperties.fileSystemInfo as any, serializeFileSystemInfo);
            writer.writeStringValue("name", driveItemUploadableProperties.name);
            writer.writeStringValue("@odata.type", driveItemUploadableProperties.odataType);
}
