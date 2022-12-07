import {Folder} from './index';
import {serializeFolderView} from './serializeFolderView';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFolder(writer: SerializationWriter, folder: Folder | undefined = {}) : void {
            writer.writeNumberValue("childCount", folder.childCount);
            writer.writeObjectValueFromMethod("view", folder.view as any, serializeFolderView);
}
