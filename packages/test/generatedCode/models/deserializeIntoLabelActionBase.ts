import {LabelActionBase} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLabelActionBase(labelActionBase: LabelActionBase | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { labelActionBase.name = n.getStringValue() as any ; },
    }
}
