import {TextColumn} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTextColumn(writer: SerializationWriter, textColumn: TextColumn | undefined = {}) : void {
            writer.writeBooleanValue("allowMultipleLines", textColumn.allowMultipleLines);
            writer.writeBooleanValue("appendChangesToExistingText", textColumn.appendChangesToExistingText);
            writer.writeNumberValue("linesForEditing", textColumn.linesForEditing);
            writer.writeNumberValue("maxLength", textColumn.maxLength);
            writer.writeStringValue("textType", textColumn.textType);
}
