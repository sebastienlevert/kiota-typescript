import {ResourceReference} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResourceReference(writer: SerializationWriter, resourceReference: ResourceReference | undefined = {}) : void {
            writer.writeStringValue("id", resourceReference.id);
            writer.writeStringValue("type", resourceReference.type);
            writer.writeStringValue("webUrl", resourceReference.webUrl);
}
