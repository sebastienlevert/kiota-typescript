import {AttachmentBaseCollectionResponse} from './index';
import {serializeAttachmentBase} from './serializeAttachmentBase';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttachmentBaseCollectionResponse(writer: SerializationWriter, attachmentBaseCollectionResponse: AttachmentBaseCollectionResponse | undefined = {}) : void {
            writer.writeStringValue("@odata.nextLink", attachmentBaseCollectionResponse.odataNextLink);
            writer.writeCollectionOfObjectValuesFromMethod("value", attachmentBaseCollectionResponse.value as any, serializeAttachmentBase);
}
