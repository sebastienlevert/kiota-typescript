import {FolderView} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFolderView(writer: SerializationWriter, folderView: FolderView | undefined = {}) : void {
            writer.writeStringValue("@odata.type", folderView.odataType);
            writer.writeStringValue("sortBy", folderView.sortBy);
            writer.writeStringValue("sortOrder", folderView.sortOrder);
            writer.writeStringValue("viewType", folderView.viewType);
}
