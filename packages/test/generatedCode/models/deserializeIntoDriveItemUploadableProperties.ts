import {deserializeIntoFileSystemInfo} from './deserializeIntoFileSystemInfo';
import {DriveItemUploadableProperties} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDriveItemUploadableProperties(driveItemUploadableProperties: DriveItemUploadableProperties | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "description": n => { driveItemUploadableProperties.description = n.getStringValue() as any ; },
        "fileSize": n => { driveItemUploadableProperties.fileSize = n.getNumberValue() as any ; },
        "fileSystemInfo": n => { driveItemUploadableProperties.fileSystemInfo = n.getObject(deserializeIntoFileSystemInfo) as any ; },
        "name": n => { driveItemUploadableProperties.name = n.getStringValue() as any ; },
        "@odata.type": n => { driveItemUploadableProperties.odataType = n.getStringValue() as any ; },
    }
}
