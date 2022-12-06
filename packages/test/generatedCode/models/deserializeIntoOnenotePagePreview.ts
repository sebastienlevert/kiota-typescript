import {deserializeIntoOnenotePagePreviewLinks} from './deserializeIntoOnenotePagePreviewLinks';
import {OnenotePagePreview} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenotePagePreview(onenotePagePreview: OnenotePagePreview | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "links": n => { onenotePagePreview.links = n.getObject(deserializeIntoOnenotePagePreviewLinks) as any ; },
        "@odata.type": n => { onenotePagePreview.odataType = n.getStringValue() as any ; },
        "previewText": n => { onenotePagePreview.previewText = n.getStringValue() as any ; },
    }
}
