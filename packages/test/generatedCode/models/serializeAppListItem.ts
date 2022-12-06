import {AppListItem} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppListItem(writer: SerializationWriter, appListItem: AppListItem | undefined = {}) : void {
            writer.writeStringValue("appId", appListItem.appId);
            writer.writeStringValue("appStoreUrl", appListItem.appStoreUrl);
            writer.writeStringValue("name", appListItem.name);
            writer.writeStringValue("@odata.type", appListItem.odataType);
            writer.writeStringValue("publisher", appListItem.publisher);
}
