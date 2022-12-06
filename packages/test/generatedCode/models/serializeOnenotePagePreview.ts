import {OnenotePagePreview} from './index';
import {serializeOnenotePagePreviewLinks} from './serializeOnenotePagePreviewLinks';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnenotePagePreview(writer: SerializationWriter, onenotePagePreview: OnenotePagePreview | undefined = {}) : void {
            writer.writeObjectValueFromMethod("links", onenotePagePreview.links as any, serializeOnenotePagePreviewLinks);
            writer.writeStringValue("@odata.type", onenotePagePreview.odataType);
            writer.writeStringValue("previewText", onenotePagePreview.previewText);
}
