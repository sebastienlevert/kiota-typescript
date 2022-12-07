import {AttachmentSessionCollectionResponse} from './index';
import {serializeAttachmentSession} from './serializeAttachmentSession';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttachmentSessionCollectionResponse(writer: SerializationWriter, attachmentSessionCollectionResponse: AttachmentSessionCollectionResponse | undefined = {}) : void {
            writer.writeStringValue("@odata.nextLink", attachmentSessionCollectionResponse.odataNextLink);
            writer.writeCollectionOfObjectValuesFromMethod("value", attachmentSessionCollectionResponse.value as any, serializeAttachmentSession);
}
