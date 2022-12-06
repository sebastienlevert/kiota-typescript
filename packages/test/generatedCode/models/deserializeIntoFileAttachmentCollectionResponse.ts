import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoFileAttachment} from './deserializeIntoFileAttachment';
import {FileAttachmentCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFileAttachmentCollectionResponse(fileAttachmentCollectionResponse: FileAttachmentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(fileAttachmentCollectionResponse),
        "value": n => { fileAttachmentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoFileAttachment) as any ; },
    }
}
