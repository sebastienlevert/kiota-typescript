import {deserializeIntoTimeCardBreak} from './deserializeIntoTimeCardBreak';
import {deserializeIntoTimeCardEvent} from './deserializeIntoTimeCardEvent';
import {TimeCardEntry} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeCardEntry(timeCardEntry: TimeCardEntry | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "breaks": n => { timeCardEntry.breaks = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTimeCardBreak) as any ; },
        "clockInEvent": n => { timeCardEntry.clockInEvent = n.getObject(deserializeIntoTimeCardEvent) as any ; },
        "clockOutEvent": n => { timeCardEntry.clockOutEvent = n.getObject(deserializeIntoTimeCardEvent) as any ; },
    }
}
