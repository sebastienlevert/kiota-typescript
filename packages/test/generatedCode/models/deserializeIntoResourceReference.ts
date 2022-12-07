import {ResourceReference} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResourceReference(resourceReference: ResourceReference | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { resourceReference.id = n.getStringValue() as any ; },
        "type": n => { resourceReference.type = n.getStringValue() as any ; },
        "webUrl": n => { resourceReference.webUrl = n.getStringValue() as any ; },
    }
}
