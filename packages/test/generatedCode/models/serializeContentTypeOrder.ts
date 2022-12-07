import {ContentTypeOrder} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContentTypeOrder(writer: SerializationWriter, contentTypeOrder: ContentTypeOrder | undefined = {}) : void {
            writer.writeBooleanValue("default", contentTypeOrder.default_escaped);
            writer.writeNumberValue("position", contentTypeOrder.position);
}
