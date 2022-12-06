import {IosHomeScreenPage} from './index';
import {serializeIosHomeScreenItem} from './serializeIosHomeScreenItem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosHomeScreenPage(writer: SerializationWriter, iosHomeScreenPage: IosHomeScreenPage | undefined = {}) : void {
            writer.writeStringValue("displayName", iosHomeScreenPage.displayName);
            writer.writeCollectionOfObjectValuesFromMethod("icons", iosHomeScreenPage.icons as any, serializeIosHomeScreenItem);
            writer.writeStringValue("@odata.type", iosHomeScreenPage.odataType);
}
