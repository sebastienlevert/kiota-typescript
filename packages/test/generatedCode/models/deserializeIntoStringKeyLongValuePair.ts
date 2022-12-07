import {StringKeyLongValuePair} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoStringKeyLongValuePair(stringKeyLongValuePair: StringKeyLongValuePair | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "key": n => { stringKeyLongValuePair.key = n.getStringValue() as any ; },
        "value": n => { stringKeyLongValuePair.value = n.getNumberValue() as any ; },
    }
}
