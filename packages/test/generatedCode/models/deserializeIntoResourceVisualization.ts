import {ResourceVisualization} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResourceVisualization(resourceVisualization: ResourceVisualization | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "containerDisplayName": n => { resourceVisualization.containerDisplayName = n.getStringValue() as any ; },
        "containerType": n => { resourceVisualization.containerType = n.getStringValue() as any ; },
        "containerWebUrl": n => { resourceVisualization.containerWebUrl = n.getStringValue() as any ; },
        "mediaType": n => { resourceVisualization.mediaType = n.getStringValue() as any ; },
        "previewImageUrl": n => { resourceVisualization.previewImageUrl = n.getStringValue() as any ; },
        "previewText": n => { resourceVisualization.previewText = n.getStringValue() as any ; },
        "title": n => { resourceVisualization.title = n.getStringValue() as any ; },
        "type": n => { resourceVisualization.type = n.getStringValue() as any ; },
    }
}
