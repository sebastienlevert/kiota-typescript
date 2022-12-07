import {SynchronizationSchedule} from './index';
import {SynchronizationScheduleState} from './synchronizationScheduleState';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSynchronizationSchedule(writer: SerializationWriter, synchronizationSchedule: SynchronizationSchedule | undefined = {}) : void {
            writer.writeDateValue("expiration", synchronizationSchedule.expiration);
            writer.writeDurationValue("interval", synchronizationSchedule.interval);
            writer.writeEnumValue<SynchronizationScheduleState>("state", synchronizationSchedule.state);
}
