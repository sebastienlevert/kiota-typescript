import {DayOfWeek} from './dayOfWeek';
import {StandardTimeZoneOffset} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export function serializeStandardTimeZoneOffset(writer: SerializationWriter, standardTimeZoneOffset: StandardTimeZoneOffset | undefined = {}) : void {
            writer.writeNumberValue("dayOccurrence", standardTimeZoneOffset.dayOccurrence);
            writer.writeEnumValue<DayOfWeek>("dayOfWeek", standardTimeZoneOffset.dayOfWeek);
            writer.writeNumberValue("month", standardTimeZoneOffset.month);
            writer.writeStringValue("@odata.type", standardTimeZoneOffset.odataType);
            writer.writeTimeOnlyValue("time", standardTimeZoneOffset.time);
            writer.writeNumberValue("year", standardTimeZoneOffset.year);
}
