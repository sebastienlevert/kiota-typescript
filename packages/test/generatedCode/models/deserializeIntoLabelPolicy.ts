import {LabelPolicy} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLabelPolicy(labelPolicy: LabelPolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { labelPolicy.id = n.getStringValue() as any ; },
        "name": n => { labelPolicy.name = n.getStringValue() as any ; },
    }
}
