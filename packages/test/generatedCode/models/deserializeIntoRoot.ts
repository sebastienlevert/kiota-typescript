import {Root} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRoot(root: Root | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { root.odataType = n.getStringValue() as any ; },
    }
}
