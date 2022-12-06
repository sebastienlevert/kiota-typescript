import {DateTimeTimeZone} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDateTimeTimeZone(writer: SerializationWriter, dateTimeTimeZone: DateTimeTimeZone | undefined = {}) : void {
            writer.writeStringValue("dateTime", dateTimeTimeZone.dateTime);
            writer.writeStringValue("@odata.type", dateTimeTimeZone.odataType);
            writer.writeStringValue("timeZone", dateTimeTimeZone.timeZone);
}
