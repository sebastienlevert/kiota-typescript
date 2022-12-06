import {ItemPreviewInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeItemPreviewInfo(writer: SerializationWriter, itemPreviewInfo: ItemPreviewInfo | undefined = {}) : void {
            writer.writeStringValue("getUrl", itemPreviewInfo.getUrl);
            writer.writeStringValue("@odata.type", itemPreviewInfo.odataType);
            writer.writeStringValue("postParameters", itemPreviewInfo.postParameters);
            writer.writeStringValue("postUrl", itemPreviewInfo.postUrl);
}
