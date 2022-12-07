import {DateTimeColumn} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDateTimeColumn(writer: SerializationWriter, dateTimeColumn: DateTimeColumn | undefined = {}) : void {
            writer.writeStringValue("displayAs", dateTimeColumn.displayAs);
            writer.writeStringValue("format", dateTimeColumn.format);
}
