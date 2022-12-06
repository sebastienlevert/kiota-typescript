import {ItemPreviewInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoItemPreviewInfo(itemPreviewInfo: ItemPreviewInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "getUrl": n => { itemPreviewInfo.getUrl = n.getStringValue() as any ; },
        "@odata.type": n => { itemPreviewInfo.odataType = n.getStringValue() as any ; },
        "postParameters": n => { itemPreviewInfo.postParameters = n.getStringValue() as any ; },
        "postUrl": n => { itemPreviewInfo.postUrl = n.getStringValue() as any ; },
    }
}
