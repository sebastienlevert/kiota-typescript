import {TimeCardBreak} from './index';
import {serializeItemBody} from './serializeItemBody';
import {serializeTimeCardEvent} from './serializeTimeCardEvent';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTimeCardBreak(writer: SerializationWriter, timeCardBreak: TimeCardBreak | undefined = {}) : void {
            writer.writeStringValue("breakId", timeCardBreak.breakId);
            writer.writeObjectValueFromMethod("end", timeCardBreak.end as any, serializeTimeCardEvent);
            writer.writeObjectValueFromMethod("notes", timeCardBreak.notes as any, serializeItemBody);
            writer.writeObjectValueFromMethod("start", timeCardBreak.start as any, serializeTimeCardEvent);
}
