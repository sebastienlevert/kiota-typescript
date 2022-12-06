import {deserializeIntoMailFolder} from './deserializeIntoMailFolder';
import {MailSearchFolder} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMailSearchFolder(mailSearchFolder: MailSearchFolder | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMailFolder(mailSearchFolder),
        "filterQuery": n => { mailSearchFolder.filterQuery = n.getStringValue() as any ; },
        "includeNestedFolders": n => { mailSearchFolder.includeNestedFolders = n.getBooleanValue() as any ; },
        "isSupported": n => { mailSearchFolder.isSupported = n.getBooleanValue() as any ; },
        "sourceFolderIds": n => { mailSearchFolder.sourceFolderIds = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
