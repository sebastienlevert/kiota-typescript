import {deserializeIntoAttachmentSession} from './deserializeIntoAttachmentSession';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AttachmentSessionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttachmentSessionCollectionResponse(attachmentSessionCollectionResponse: AttachmentSessionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(attachmentSessionCollectionResponse),
        "value": n => { attachmentSessionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAttachmentSession) as any ; },
    }
}
