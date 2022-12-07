import {LookupColumn} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLookupColumn(writer: SerializationWriter, lookupColumn: LookupColumn | undefined = {}) : void {
            writer.writeBooleanValue("allowMultipleValues", lookupColumn.allowMultipleValues);
            writer.writeBooleanValue("allowUnlimitedLength", lookupColumn.allowUnlimitedLength);
            writer.writeStringValue("columnName", lookupColumn.columnName);
            writer.writeStringValue("listId", lookupColumn.listId);
            writer.writeStringValue("primaryLookupColumnId", lookupColumn.primaryLookupColumnId);
}
