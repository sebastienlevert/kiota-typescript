import {FileSystemInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFileSystemInfo(writer: SerializationWriter, fileSystemInfo: FileSystemInfo | undefined = {}) : void {
            writer.writeDateValue("createdDateTime", fileSystemInfo.createdDateTime);
            writer.writeDateValue("lastAccessedDateTime", fileSystemInfo.lastAccessedDateTime);
            writer.writeDateValue("lastModifiedDateTime", fileSystemInfo.lastModifiedDateTime);
}
