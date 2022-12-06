import {serializeAttachmentInfo} from '../../../../../../../../models/serializeAttachmentInfo';
import {CreateUploadSessionPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCreateUploadSessionPostRequestBody(writer: SerializationWriter, createUploadSessionPostRequestBody: CreateUploadSessionPostRequestBody | undefined = {}) : void {
            writer.writeObjectValueFromMethod("attachmentInfo", createUploadSessionPostRequestBody.attachmentInfo as any, serializeAttachmentInfo);
}
