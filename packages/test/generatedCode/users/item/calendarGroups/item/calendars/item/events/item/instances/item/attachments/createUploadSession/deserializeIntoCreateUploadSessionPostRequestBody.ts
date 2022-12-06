import {deserializeIntoAttachmentItem} from '../../../../../../../../../../../../models/deserializeIntoAttachmentItem';
import {CreateUploadSessionPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCreateUploadSessionPostRequestBody(createUploadSessionPostRequestBody: CreateUploadSessionPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "attachmentItem": n => { createUploadSessionPostRequestBody.attachmentItem = n.getObject(deserializeIntoAttachmentItem) as any ; },
    }
}
