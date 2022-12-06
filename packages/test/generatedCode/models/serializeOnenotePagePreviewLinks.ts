import {OnenotePagePreviewLinks} from './index';
import {serializeExternalLink} from './serializeExternalLink';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnenotePagePreviewLinks(writer: SerializationWriter, onenotePagePreviewLinks: OnenotePagePreviewLinks | undefined = {}) : void {
            writer.writeStringValue("@odata.type", onenotePagePreviewLinks.odataType);
            writer.writeObjectValueFromMethod("previewImageUrl", onenotePagePreviewLinks.previewImageUrl as any, serializeExternalLink);
}
