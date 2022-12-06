import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Presence} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPresence(presence: Presence | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(presence),
        "activity": n => { presence.activity = n.getStringValue() as any ; },
        "availability": n => { presence.availability = n.getStringValue() as any ; },
    }
}
