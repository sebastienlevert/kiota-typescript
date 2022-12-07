import {ConfirmedBy} from './confirmedBy';
import {TimeCard} from './index';
import {serializeChangeTrackedEntity} from './serializeChangeTrackedEntity';
import {serializeItemBody} from './serializeItemBody';
import {serializeTimeCardBreak} from './serializeTimeCardBreak';
import {serializeTimeCardEntry} from './serializeTimeCardEntry';
import {serializeTimeCardEvent} from './serializeTimeCardEvent';
import {TimeCardState} from './timeCardState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTimeCard(writer: SerializationWriter, timeCard: TimeCard | undefined = {}) : void {
        serializeChangeTrackedEntity(writer, timeCard)
            writer.writeCollectionOfObjectValuesFromMethod("breaks", timeCard.breaks as any, serializeTimeCardBreak);
            writer.writeObjectValueFromMethod("clockInEvent", timeCard.clockInEvent as any, serializeTimeCardEvent);
            writer.writeObjectValueFromMethod("clockOutEvent", timeCard.clockOutEvent as any, serializeTimeCardEvent);
            writer.writeEnumValue<ConfirmedBy>("confirmedBy", timeCard.confirmedBy);
            writer.writeObjectValueFromMethod("notes", timeCard.notes as any, serializeItemBody);
            writer.writeObjectValueFromMethod("originalEntry", timeCard.originalEntry as any, serializeTimeCardEntry);
            writer.writeEnumValue<TimeCardState>("state", timeCard.state);
            writer.writeStringValue("userId", timeCard.userId);
}
