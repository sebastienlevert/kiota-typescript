import {deserializeIntoAttachment} from './deserializeIntoAttachment';
import {AttachmentCollectionResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttachmentCollectionResponse(attachmentCollectionResponse: AttachmentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.nextLink": n => { attachmentCollectionResponse.odataNextLink = n.getStringValue() as any ; },
        "value": n => { attachmentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAttachment) as any ; },
    }
}
