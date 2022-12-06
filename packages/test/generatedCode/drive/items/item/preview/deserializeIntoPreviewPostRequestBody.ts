import {PreviewPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPreviewPostRequestBody(previewPostRequestBody: PreviewPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "page": n => { previewPostRequestBody.page = n.getStringValue() as any ; },
        "zoom": n => { previewPostRequestBody.zoom = n.getNumberValue() as any ; },
    }
}
