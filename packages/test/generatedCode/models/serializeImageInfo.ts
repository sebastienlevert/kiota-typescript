import {ImageInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImageInfo(writer: SerializationWriter, imageInfo: ImageInfo | undefined = {}) : void {
            writer.writeBooleanValue("addImageQuery", imageInfo.addImageQuery);
            writer.writeStringValue("alternateText", imageInfo.alternateText);
            writer.writeStringValue("alternativeText", imageInfo.alternativeText);
            writer.writeStringValue("iconUrl", imageInfo.iconUrl);
}
