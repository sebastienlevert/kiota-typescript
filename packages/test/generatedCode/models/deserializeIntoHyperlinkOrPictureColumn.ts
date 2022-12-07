import {HyperlinkOrPictureColumn} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHyperlinkOrPictureColumn(hyperlinkOrPictureColumn: HyperlinkOrPictureColumn | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "isPicture": n => { hyperlinkOrPictureColumn.isPicture = n.getBooleanValue() as any ; },
    }
}
