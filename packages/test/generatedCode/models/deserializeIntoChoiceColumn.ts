import {ChoiceColumn} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChoiceColumn(choiceColumn: ChoiceColumn | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "allowTextEntry": n => { choiceColumn.allowTextEntry = n.getBooleanValue() as any ; },
        "choices": n => { choiceColumn.choices = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "displayAs": n => { choiceColumn.displayAs = n.getStringValue() as any ; },
    }
}
