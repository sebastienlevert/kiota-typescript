import {CalculatedColumn} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCalculatedColumn(calculatedColumn: CalculatedColumn | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "format": n => { calculatedColumn.format = n.getStringValue() as any ; },
        "formula": n => { calculatedColumn.formula = n.getStringValue() as any ; },
        "outputType": n => { calculatedColumn.outputType = n.getStringValue() as any ; },
    }
}
