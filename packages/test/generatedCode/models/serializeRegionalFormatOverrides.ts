import {RegionalFormatOverrides} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRegionalFormatOverrides(writer: SerializationWriter, regionalFormatOverrides: RegionalFormatOverrides | undefined = {}) : void {
            writer.writeStringValue("calendar", regionalFormatOverrides.calendar);
            writer.writeStringValue("firstDayOfWeek", regionalFormatOverrides.firstDayOfWeek);
            writer.writeStringValue("longDateFormat", regionalFormatOverrides.longDateFormat);
            writer.writeStringValue("longTimeFormat", regionalFormatOverrides.longTimeFormat);
            writer.writeStringValue("shortDateFormat", regionalFormatOverrides.shortDateFormat);
            writer.writeStringValue("shortTimeFormat", regionalFormatOverrides.shortTimeFormat);
            writer.writeStringValue("timeZone", regionalFormatOverrides.timeZone);
}
