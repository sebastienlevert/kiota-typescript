import {deserializeIntoAttachmentBase} from './deserializeIntoAttachmentBase';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AttachmentBaseCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttachmentBaseCollectionResponse(attachmentBaseCollectionResponse: AttachmentBaseCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(attachmentBaseCollectionResponse),
        "value": n => { attachmentBaseCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAttachmentBase) as any ; },
    }
}
