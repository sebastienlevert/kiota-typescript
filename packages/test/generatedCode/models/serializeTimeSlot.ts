import {TimeSlot} from './index';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTimeSlot(writer: SerializationWriter, timeSlot: TimeSlot | undefined = {}) : void {
            writer.writeObjectValueFromMethod("end", timeSlot.end as any, serializeDateTimeTimeZone);
            writer.writeObjectValueFromMethod("start", timeSlot.start as any, serializeDateTimeTimeZone);
}
