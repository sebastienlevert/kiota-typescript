import {SizeRange} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSizeRange(sizeRange: SizeRange | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "maximumSize": n => { sizeRange.maximumSize = n.getNumberValue() as any ; },
        "minimumSize": n => { sizeRange.minimumSize = n.getNumberValue() as any ; },
    }
}
