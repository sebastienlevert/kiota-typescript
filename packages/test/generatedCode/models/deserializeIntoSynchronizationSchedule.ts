import {SynchronizationSchedule} from './index';
import {SynchronizationScheduleState} from './synchronizationScheduleState';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronizationSchedule(synchronizationSchedule: SynchronizationSchedule | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "expiration": n => { synchronizationSchedule.expiration = n.getDateValue() as any ; },
        "interval": n => { synchronizationSchedule.interval = n.getDurationValue() as any ; },
        "state": n => { synchronizationSchedule.state = n.getEnumValue<SynchronizationScheduleState>(SynchronizationScheduleState) as any ; },
    }
}
