import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoOutOfOfficeSettings} from './deserializeIntoOutOfOfficeSettings';
import {Presence} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPresence(presence: Presence | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(presence),
        "activity": n => { presence.activity = n.getStringValue() as any ; },
        "availability": n => { presence.availability = n.getStringValue() as any ; },
        "outOfOfficeSettings": n => { presence.outOfOfficeSettings = n.getObject(deserializeIntoOutOfOfficeSettings) as any ; },
    }
}
