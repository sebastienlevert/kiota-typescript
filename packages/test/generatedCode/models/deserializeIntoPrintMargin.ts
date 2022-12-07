import {PrintMargin} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintMargin(printMargin: PrintMargin | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "bottom": n => { printMargin.bottom = n.getNumberValue() as any ; },
        "left": n => { printMargin.left = n.getNumberValue() as any ; },
        "right": n => { printMargin.right = n.getNumberValue() as any ; },
        "top": n => { printMargin.top = n.getNumberValue() as any ; },
    }
}
