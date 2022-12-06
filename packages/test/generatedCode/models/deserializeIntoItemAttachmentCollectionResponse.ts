import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoItemAttachment} from './deserializeIntoItemAttachment';
import {ItemAttachmentCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoItemAttachmentCollectionResponse(itemAttachmentCollectionResponse: ItemAttachmentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(itemAttachmentCollectionResponse),
        "value": n => { itemAttachmentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoItemAttachment) as any ; },
    }
}
