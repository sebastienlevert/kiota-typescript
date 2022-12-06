import {ContentTypeOrder} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContentTypeOrder(contentTypeOrder: ContentTypeOrder | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "default": n => { contentTypeOrder.default_escaped = n.getBooleanValue() as any ; },
        "@odata.type": n => { contentTypeOrder.odataType = n.getStringValue() as any ; },
        "position": n => { contentTypeOrder.position = n.getNumberValue() as any ; },
    }
}
