import {FileSystemInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFileSystemInfo(fileSystemInfo: FileSystemInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "createdDateTime": n => { fileSystemInfo.createdDateTime = n.getDateValue() as any ; },
        "lastAccessedDateTime": n => { fileSystemInfo.lastAccessedDateTime = n.getDateValue() as any ; },
        "lastModifiedDateTime": n => { fileSystemInfo.lastModifiedDateTime = n.getDateValue() as any ; },
    }
}
