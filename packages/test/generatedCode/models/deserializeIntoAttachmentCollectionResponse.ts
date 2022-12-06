import {deserializeIntoAttachment} from './deserializeIntoAttachment';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AttachmentCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttachmentCollectionResponse(attachmentCollectionResponse: AttachmentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(attachmentCollectionResponse),
        "value": n => { attachmentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAttachment) as any ; },
    }
}
