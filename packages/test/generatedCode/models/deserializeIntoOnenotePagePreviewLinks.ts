import {deserializeIntoExternalLink} from './deserializeIntoExternalLink';
import {OnenotePagePreviewLinks} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenotePagePreviewLinks(onenotePagePreviewLinks: OnenotePagePreviewLinks | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { onenotePagePreviewLinks.odataType = n.getStringValue() as any ; },
        "previewImageUrl": n => { onenotePagePreviewLinks.previewImageUrl = n.getObject(deserializeIntoExternalLink) as any ; },
    }
}
