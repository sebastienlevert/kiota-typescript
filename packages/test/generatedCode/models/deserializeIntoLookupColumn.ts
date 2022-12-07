import {LookupColumn} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLookupColumn(lookupColumn: LookupColumn | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "allowMultipleValues": n => { lookupColumn.allowMultipleValues = n.getBooleanValue() as any ; },
        "allowUnlimitedLength": n => { lookupColumn.allowUnlimitedLength = n.getBooleanValue() as any ; },
        "columnName": n => { lookupColumn.columnName = n.getStringValue() as any ; },
        "listId": n => { lookupColumn.listId = n.getStringValue() as any ; },
        "primaryLookupColumnId": n => { lookupColumn.primaryLookupColumnId = n.getStringValue() as any ; },
    }
}
