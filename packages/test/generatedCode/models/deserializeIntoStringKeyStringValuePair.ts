import {StringKeyStringValuePair} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoStringKeyStringValuePair(stringKeyStringValuePair: StringKeyStringValuePair | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "key": n => { stringKeyStringValuePair.key = n.getStringValue() as any ; },
        "value": n => { stringKeyStringValuePair.value = n.getStringValue() as any ; },
    }
}
