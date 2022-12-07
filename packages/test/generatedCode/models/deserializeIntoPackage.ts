import {Package} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPackage(x: Package | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "type": n => { x.type = n.getStringValue() as any ; },
    }
}
