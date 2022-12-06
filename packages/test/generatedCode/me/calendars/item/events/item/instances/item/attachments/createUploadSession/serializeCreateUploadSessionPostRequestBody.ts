import {serializeAttachmentItem} from '../../../../../../../../../models/serializeAttachmentItem';
import {CreateUploadSessionPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCreateUploadSessionPostRequestBody(writer: SerializationWriter, createUploadSessionPostRequestBody: CreateUploadSessionPostRequestBody | undefined = {}) : void {
            writer.writeObjectValueFromMethod("attachmentItem", createUploadSessionPostRequestBody.attachmentItem as any, serializeAttachmentItem);
}
