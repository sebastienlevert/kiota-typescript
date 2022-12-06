import {IosHomeScreenFolderPage} from './index';
import {serializeIosHomeScreenApp} from './serializeIosHomeScreenApp';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosHomeScreenFolderPage(writer: SerializationWriter, iosHomeScreenFolderPage: IosHomeScreenFolderPage | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("apps", iosHomeScreenFolderPage.apps as any, serializeIosHomeScreenApp);
            writer.writeStringValue("displayName", iosHomeScreenFolderPage.displayName);
            writer.writeStringValue("@odata.type", iosHomeScreenFolderPage.odataType);
}
