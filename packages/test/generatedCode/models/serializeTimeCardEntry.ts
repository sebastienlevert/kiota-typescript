import {TimeCardEntry} from './index';
import {serializeTimeCardBreak} from './serializeTimeCardBreak';
import {serializeTimeCardEvent} from './serializeTimeCardEvent';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTimeCardEntry(writer: SerializationWriter, timeCardEntry: TimeCardEntry | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("breaks", timeCardEntry.breaks as any, serializeTimeCardBreak);
            writer.writeObjectValueFromMethod("clockInEvent", timeCardEntry.clockInEvent as any, serializeTimeCardEvent);
            writer.writeObjectValueFromMethod("clockOutEvent", timeCardEntry.clockOutEvent as any, serializeTimeCardEvent);
}
