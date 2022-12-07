import {ContentTypeInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContentTypeInfo(writer: SerializationWriter, contentTypeInfo: ContentTypeInfo | undefined = {}) : void {
            writer.writeStringValue("id", contentTypeInfo.id);
            writer.writeStringValue("name", contentTypeInfo.name);
}
