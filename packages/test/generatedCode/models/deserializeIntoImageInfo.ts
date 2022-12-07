import {ImageInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImageInfo(imageInfo: ImageInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "addImageQuery": n => { imageInfo.addImageQuery = n.getBooleanValue() as any ; },
        "alternateText": n => { imageInfo.alternateText = n.getStringValue() as any ; },
        "alternativeText": n => { imageInfo.alternativeText = n.getStringValue() as any ; },
        "iconUrl": n => { imageInfo.iconUrl = n.getStringValue() as any ; },
    }
}
