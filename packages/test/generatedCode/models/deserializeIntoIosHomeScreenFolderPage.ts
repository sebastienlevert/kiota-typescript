import {deserializeIntoIosHomeScreenApp} from './deserializeIntoIosHomeScreenApp';
import {IosHomeScreenFolderPage} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosHomeScreenFolderPage(iosHomeScreenFolderPage: IosHomeScreenFolderPage | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "apps": n => { iosHomeScreenFolderPage.apps = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIosHomeScreenApp) as any ; },
        "displayName": n => { iosHomeScreenFolderPage.displayName = n.getStringValue() as any ; },
        "@odata.type": n => { iosHomeScreenFolderPage.odataType = n.getStringValue() as any ; },
    }
}
