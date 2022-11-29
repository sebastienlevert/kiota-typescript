import {Attachment} from './attachment';
import {Attachment, AttachmentCollectionResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttachmentCollectionResponse(attachmentCollectionResponse: AttachmentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.nextLink": n => { AttachmentCollectionResponse.odataNextLink = n.getStringValue(); },
        "value": n => { AttachmentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod<Attachment>(deserializeIntoAttachment); },
    }
}
