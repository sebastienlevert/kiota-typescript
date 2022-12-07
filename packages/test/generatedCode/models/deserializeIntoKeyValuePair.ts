import {KeyValuePair} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoKeyValuePair(keyValuePair: KeyValuePair | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { keyValuePair.name = n.getStringValue() as any ; },
        "value": n => { keyValuePair.value = n.getStringValue() as any ; },
    }
}
