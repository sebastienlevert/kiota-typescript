import {Thumbnail} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeThumbnail(writer: SerializationWriter, thumbnail: Thumbnail | undefined = {}) : void {
            writer.writeStringValue("content", thumbnail.content);
            writer.writeNumberValue("height", thumbnail.height);
            writer.writeStringValue("sourceItemId", thumbnail.sourceItemId);
            writer.writeStringValue("url", thumbnail.url);
            writer.writeNumberValue("width", thumbnail.width);
}
