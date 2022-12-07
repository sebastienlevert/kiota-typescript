import {TextColumn} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTextColumn(textColumn: TextColumn | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "allowMultipleLines": n => { textColumn.allowMultipleLines = n.getBooleanValue() as any ; },
        "appendChangesToExistingText": n => { textColumn.appendChangesToExistingText = n.getBooleanValue() as any ; },
        "linesForEditing": n => { textColumn.linesForEditing = n.getNumberValue() as any ; },
        "maxLength": n => { textColumn.maxLength = n.getNumberValue() as any ; },
        "textType": n => { textColumn.textType = n.getStringValue() as any ; },
    }
}
