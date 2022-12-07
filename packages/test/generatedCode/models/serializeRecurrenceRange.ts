import {RecurrenceRange} from './index';
import {RecurrenceRangeType} from './recurrenceRangeType';
import {AdditionalDataHolder, DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRecurrenceRange(writer: SerializationWriter, recurrenceRange: RecurrenceRange | undefined = {}) : void {
            writer.writeDateOnlyValue("endDate", recurrenceRange.endDate);
            writer.writeNumberValue("numberOfOccurrences", recurrenceRange.numberOfOccurrences);
            writer.writeStringValue("recurrenceTimeZone", recurrenceRange.recurrenceTimeZone);
            writer.writeDateOnlyValue("startDate", recurrenceRange.startDate);
            writer.writeEnumValue<RecurrenceRangeType>("type", recurrenceRange.type);
}
