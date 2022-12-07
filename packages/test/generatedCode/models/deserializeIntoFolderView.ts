import {FolderView} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFolderView(folderView: FolderView | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "sortBy": n => { folderView.sortBy = n.getStringValue() as any ; },
        "sortOrder": n => { folderView.sortOrder = n.getStringValue() as any ; },
        "viewType": n => { folderView.viewType = n.getStringValue() as any ; },
    }
}
