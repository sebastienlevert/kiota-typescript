import {TermColumn} from './index';
import {serializeSet} from './termStore/serializeSet';
import {serializeTerm} from './termStore/serializeTerm';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTermColumn(writer: SerializationWriter, termColumn: TermColumn | undefined = {}) : void {
            writer.writeBooleanValue("allowMultipleValues", termColumn.allowMultipleValues);
            writer.writeObjectValueFromMethod("parentTerm", termColumn.parentTerm as any, serializeTerm);
            writer.writeBooleanValue("showFullyQualifiedName", termColumn.showFullyQualifiedName);
            writer.writeObjectValueFromMethod("termSet", termColumn.termSet as any, serializeSet);
}
