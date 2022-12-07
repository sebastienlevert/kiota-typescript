import {PersonAnnualEvent} from './index';
import {PersonAnnualEventType} from './personAnnualEventType';
import {serializeItemFacet} from './serializeItemFacet';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePersonAnnualEvent(writer: SerializationWriter, personAnnualEvent: PersonAnnualEvent | undefined = {}) : void {
        serializeItemFacet(writer, personAnnualEvent)
            writer.writeDateOnlyValue("date", personAnnualEvent.date);
            writer.writeStringValue("displayName", personAnnualEvent.displayName);
            writer.writeEnumValue<PersonAnnualEventType>("type", personAnnualEvent.type);
}
