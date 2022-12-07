import {ChoiceColumn} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChoiceColumn(writer: SerializationWriter, choiceColumn: ChoiceColumn | undefined = {}) : void {
            writer.writeBooleanValue("allowTextEntry", choiceColumn.allowTextEntry);
            writer.writeCollectionOfPrimitiveValues<string>("choices", choiceColumn.choices);
            writer.writeStringValue("displayAs", choiceColumn.displayAs);
}
