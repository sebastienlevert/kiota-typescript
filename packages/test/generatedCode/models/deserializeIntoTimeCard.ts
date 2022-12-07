import {ConfirmedBy} from './confirmedBy';
import {deserializeIntoChangeTrackedEntity} from './deserializeIntoChangeTrackedEntity';
import {deserializeIntoItemBody} from './deserializeIntoItemBody';
import {deserializeIntoTimeCardBreak} from './deserializeIntoTimeCardBreak';
import {deserializeIntoTimeCardEntry} from './deserializeIntoTimeCardEntry';
import {deserializeIntoTimeCardEvent} from './deserializeIntoTimeCardEvent';
import {TimeCard} from './index';
import {TimeCardState} from './timeCardState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeCard(timeCard: TimeCard | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoChangeTrackedEntity(timeCard),
        "breaks": n => { timeCard.breaks = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTimeCardBreak) as any ; },
        "clockInEvent": n => { timeCard.clockInEvent = n.getObject(deserializeIntoTimeCardEvent) as any ; },
        "clockOutEvent": n => { timeCard.clockOutEvent = n.getObject(deserializeIntoTimeCardEvent) as any ; },
        "confirmedBy": n => { timeCard.confirmedBy = n.getEnumValue<ConfirmedBy>(ConfirmedBy) as any ; },
        "notes": n => { timeCard.notes = n.getObject(deserializeIntoItemBody) as any ; },
        "originalEntry": n => { timeCard.originalEntry = n.getObject(deserializeIntoTimeCardEntry) as any ; },
        "state": n => { timeCard.state = n.getEnumValue<TimeCardState>(TimeCardState) as any ; },
        "userId": n => { timeCard.userId = n.getStringValue() as any ; },
    }
}
