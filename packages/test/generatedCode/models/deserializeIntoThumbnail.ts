import {Thumbnail} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoThumbnail(thumbnail: Thumbnail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "content": n => { thumbnail.content = n.getStringValue() as any ; },
        "height": n => { thumbnail.height = n.getNumberValue() as any ; },
        "sourceItemId": n => { thumbnail.sourceItemId = n.getStringValue() as any ; },
        "url": n => { thumbnail.url = n.getStringValue() as any ; },
        "width": n => { thumbnail.width = n.getNumberValue() as any ; },
    }
}
