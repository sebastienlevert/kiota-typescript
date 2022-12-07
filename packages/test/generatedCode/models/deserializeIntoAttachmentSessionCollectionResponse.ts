import {deserializeIntoAttachmentSession} from './deserializeIntoAttachmentSession';
import {AttachmentSessionCollectionResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttachmentSessionCollectionResponse(attachmentSessionCollectionResponse: AttachmentSessionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.nextLink": n => { attachmentSessionCollectionResponse.odataNextLink = n.getStringValue() as any ; },
        "value": n => { attachmentSessionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAttachmentSession) as any ; },
    }
}
