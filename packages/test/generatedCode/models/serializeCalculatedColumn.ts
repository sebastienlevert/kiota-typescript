import {CalculatedColumn} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCalculatedColumn(writer: SerializationWriter, calculatedColumn: CalculatedColumn | undefined = {}) : void {
            writer.writeStringValue("format", calculatedColumn.format);
            writer.writeStringValue("formula", calculatedColumn.formula);
            writer.writeStringValue("@odata.type", calculatedColumn.odataType);
            writer.writeStringValue("outputType", calculatedColumn.outputType);
}
