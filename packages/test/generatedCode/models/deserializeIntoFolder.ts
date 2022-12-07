import {deserializeIntoFolderView} from './deserializeIntoFolderView';
import {Folder} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFolder(folder: Folder | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "childCount": n => { folder.childCount = n.getNumberValue() as any ; },
        "view": n => { folder.view = n.getObject(deserializeIntoFolderView) as any ; },
    }
}
