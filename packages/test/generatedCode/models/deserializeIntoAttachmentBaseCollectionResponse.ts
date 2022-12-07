import {deserializeIntoAttachmentBase} from './deserializeIntoAttachmentBase';
import {AttachmentBaseCollectionResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttachmentBaseCollectionResponse(attachmentBaseCollectionResponse: AttachmentBaseCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.nextLink": n => { attachmentBaseCollectionResponse.odataNextLink = n.getStringValue() as any ; },
        "value": n => { attachmentBaseCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAttachmentBase) as any ; },
    }
}
