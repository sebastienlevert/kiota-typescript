import {WebPart} from './index';
import {serializeSitePageData} from './serializeSitePageData';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWebPart(writer: SerializationWriter, webPart: WebPart | undefined = {}) : void {
            writer.writeObjectValueFromMethod("data", webPart.data as any, serializeSitePageData);
            writer.writeStringValue("type", webPart.type);
}
