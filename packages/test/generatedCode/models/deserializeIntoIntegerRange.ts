import {IntegerRange} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIntegerRange(integerRange: IntegerRange | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "end": n => { integerRange.end = n.getNumberValue() as any ; },
        "@odata.type": n => { integerRange.odataType = n.getStringValue() as any ; },
        "start": n => { integerRange.start = n.getNumberValue() as any ; },
    }
}
