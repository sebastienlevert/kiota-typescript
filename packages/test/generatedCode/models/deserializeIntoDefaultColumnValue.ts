import {DefaultColumnValue} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDefaultColumnValue(defaultColumnValue: DefaultColumnValue | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "formula": n => { defaultColumnValue.formula = n.getStringValue() as any ; },
        "value": n => { defaultColumnValue.value = n.getStringValue() as any ; },
    }
}
