import {TimeCardEvent} from './index';
import {serializeItemBody} from './serializeItemBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTimeCardEvent(writer: SerializationWriter, timeCardEvent: TimeCardEvent | undefined = {}) : void {
            writer.writeBooleanValue("atApprovedLocation", timeCardEvent.atApprovedLocation);
            writer.writeDateValue("dateTime", timeCardEvent.dateTime);
            writer.writeObjectValueFromMethod("notes", timeCardEvent.notes as any, serializeItemBody);
}
