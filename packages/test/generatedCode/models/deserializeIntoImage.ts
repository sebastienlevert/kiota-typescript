import {Image} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImage(image: Image | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "height": n => { image.height = n.getNumberValue() as any ; },
        "width": n => { image.width = n.getNumberValue() as any ; },
    }
}
