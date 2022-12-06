import {IosHomeScreenFolder} from './index';
import {serializeIosHomeScreenFolderPage} from './serializeIosHomeScreenFolderPage';
import {serializeIosHomeScreenItem} from './serializeIosHomeScreenItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosHomeScreenFolder(writer: SerializationWriter, iosHomeScreenFolder: IosHomeScreenFolder | undefined = {}) : void {
        serializeIosHomeScreenItem(writer, iosHomeScreenFolder)
            writer.writeCollectionOfObjectValuesFromMethod("pages", iosHomeScreenFolder.pages as any, serializeIosHomeScreenFolderPage);
}
