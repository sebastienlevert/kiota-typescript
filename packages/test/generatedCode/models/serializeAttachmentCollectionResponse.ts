import {AttachmentCollectionResponse} from './index';
import {serializeAttachment} from './serializeAttachment';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttachmentCollectionResponse(writer: SerializationWriter, attachmentCollectionResponse: AttachmentCollectionResponse | undefined = {}) : void {
            writer.writeStringValue("@odata.nextLink", attachmentCollectionResponse.odataNextLink);
            writer.writeCollectionOfObjectValuesFromMethod("value", attachmentCollectionResponse.value as any, serializeAttachment);
}
