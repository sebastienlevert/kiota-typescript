import {IosHomeScreenItem} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosHomeScreenItem(writer: SerializationWriter, iosHomeScreenItem: IosHomeScreenItem | undefined = {}) : void {
            writer.writeStringValue("displayName", iosHomeScreenItem.displayName);
            writer.writeStringValue("@odata.type", iosHomeScreenItem.odataType);
}
