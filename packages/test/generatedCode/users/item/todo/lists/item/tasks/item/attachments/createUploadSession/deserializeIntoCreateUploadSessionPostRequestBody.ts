import {deserializeIntoAttachmentInfo} from '../../../../../../../../../models/deserializeIntoAttachmentInfo';
import {CreateUploadSessionPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCreateUploadSessionPostRequestBody(createUploadSessionPostRequestBody: CreateUploadSessionPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "attachmentInfo": n => { createUploadSessionPostRequestBody.attachmentInfo = n.getObject(deserializeIntoAttachmentInfo) as any ; },
    }
}
