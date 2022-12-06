import {deserializeIntoIosHomeScreenItem} from './deserializeIntoIosHomeScreenItem';
import {IosHomeScreenPage} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosHomeScreenPage(iosHomeScreenPage: IosHomeScreenPage | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { iosHomeScreenPage.displayName = n.getStringValue() as any ; },
        "icons": n => { iosHomeScreenPage.icons = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIosHomeScreenItem) as any ; },
        "@odata.type": n => { iosHomeScreenPage.odataType = n.getStringValue() as any ; },
    }
}
