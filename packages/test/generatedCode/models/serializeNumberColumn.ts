import {NumberColumn} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeNumberColumn(writer: SerializationWriter, numberColumn: NumberColumn | undefined = {}) : void {
            writer.writeStringValue("decimalPlaces", numberColumn.decimalPlaces);
            writer.writeStringValue("displayAs", numberColumn.displayAs);
            writer.writeNumberValue("maximum", numberColumn.maximum);
            writer.writeNumberValue("minimum", numberColumn.minimum);
}
