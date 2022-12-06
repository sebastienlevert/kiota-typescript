import {Folder} from './index';
import {serializeFolderView} from './serializeFolderView';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFolder(writer: SerializationWriter, folder: Folder | undefined = {}) : void {
            writer.writeNumberValue("childCount", folder.childCount);
            writer.writeStringValue("@odata.type", folder.odataType);
            writer.writeObjectValueFromMethod("view", folder.view as any, serializeFolderView);
}
