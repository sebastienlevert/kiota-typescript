import {ContentTypeOrder} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContentTypeOrder(contentTypeOrder: ContentTypeOrder | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "default": n => { contentTypeOrder.default_escaped = n.getBooleanValue() as any ; },
        "position": n => { contentTypeOrder.position = n.getNumberValue() as any ; },
    }
}
