import {AppListItem} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppListItem(appListItem: AppListItem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "appId": n => { appListItem.appId = n.getStringValue() as any ; },
        "appStoreUrl": n => { appListItem.appStoreUrl = n.getStringValue() as any ; },
        "name": n => { appListItem.name = n.getStringValue() as any ; },
        "@odata.type": n => { appListItem.odataType = n.getStringValue() as any ; },
        "publisher": n => { appListItem.publisher = n.getStringValue() as any ; },
    }
}
