import {PreviewPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePreviewPostRequestBody(writer: SerializationWriter, previewPostRequestBody: PreviewPostRequestBody | undefined = {}) : void {
            writer.writeStringValue("page", previewPostRequestBody.page);
            writer.writeNumberValue("zoom", previewPostRequestBody.zoom);
}
