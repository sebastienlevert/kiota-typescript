import {deserializeIntoItemBody} from './deserializeIntoItemBody';
import {TimeCardEvent} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeCardEvent(timeCardEvent: TimeCardEvent | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "atApprovedLocation": n => { timeCardEvent.atApprovedLocation = n.getBooleanValue() as any ; },
        "dateTime": n => { timeCardEvent.dateTime = n.getDateValue() as any ; },
        "notes": n => { timeCardEvent.notes = n.getObject(deserializeIntoItemBody) as any ; },
    }
}
