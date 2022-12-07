import {deserializeIntoItemBody} from './deserializeIntoItemBody';
import {deserializeIntoTimeCardEvent} from './deserializeIntoTimeCardEvent';
import {TimeCardBreak} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeCardBreak(timeCardBreak: TimeCardBreak | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "breakId": n => { timeCardBreak.breakId = n.getStringValue() as any ; },
        "end": n => { timeCardBreak.end = n.getObject(deserializeIntoTimeCardEvent) as any ; },
        "notes": n => { timeCardBreak.notes = n.getObject(deserializeIntoItemBody) as any ; },
        "start": n => { timeCardBreak.start = n.getObject(deserializeIntoTimeCardEvent) as any ; },
    }
}
