import {NumberColumn} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNumberColumn(numberColumn: NumberColumn | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "decimalPlaces": n => { numberColumn.decimalPlaces = n.getStringValue() as any ; },
        "displayAs": n => { numberColumn.displayAs = n.getStringValue() as any ; },
        "maximum": n => { numberColumn.maximum = n.getNumberValue() as any ; },
        "minimum": n => { numberColumn.minimum = n.getNumberValue() as any ; },
    }
}
