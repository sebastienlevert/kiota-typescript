import {KeyValue} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoKeyValue(keyValue: KeyValue | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "key": n => { keyValue.key = n.getStringValue() as any ; },
        "value": n => { keyValue.value = n.getStringValue() as any ; },
    }
}
