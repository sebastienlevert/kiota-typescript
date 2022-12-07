import {IntegerRange} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIntegerRange(integerRange: IntegerRange | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "end": n => { integerRange.end = n.getNumberValue() as any ; },
        "maximum": n => { integerRange.maximum = n.getNumberValue() as any ; },
        "minimum": n => { integerRange.minimum = n.getNumberValue() as any ; },
        "start": n => { integerRange.start = n.getNumberValue() as any ; },
    }
}
