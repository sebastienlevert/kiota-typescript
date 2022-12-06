import {deserializeIntoIosHomeScreenFolderPage} from './deserializeIntoIosHomeScreenFolderPage';
import {deserializeIntoIosHomeScreenItem} from './deserializeIntoIosHomeScreenItem';
import {IosHomeScreenFolder} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosHomeScreenFolder(iosHomeScreenFolder: IosHomeScreenFolder | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIosHomeScreenItem(iosHomeScreenFolder),
        "pages": n => { iosHomeScreenFolder.pages = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIosHomeScreenFolderPage) as any ; },
    }
}
