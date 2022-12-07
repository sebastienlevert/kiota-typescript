import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ContactMergeSuggestions} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContactMergeSuggestions(contactMergeSuggestions: ContactMergeSuggestions | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(contactMergeSuggestions),
        "isEnabled": n => { contactMergeSuggestions.isEnabled = n.getBooleanValue() as any ; },
    }
}
