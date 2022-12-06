import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoReferenceAttachment} from './deserializeIntoReferenceAttachment';
import {ReferenceAttachmentCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoReferenceAttachmentCollectionResponse(referenceAttachmentCollectionResponse: ReferenceAttachmentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(referenceAttachmentCollectionResponse),
        "value": n => { referenceAttachmentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoReferenceAttachment) as any ; },
    }
}
