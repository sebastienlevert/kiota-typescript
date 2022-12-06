import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTaskFileAttachment} from './deserializeIntoTaskFileAttachment';
import {TaskFileAttachmentCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTaskFileAttachmentCollectionResponse(taskFileAttachmentCollectionResponse: TaskFileAttachmentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(taskFileAttachmentCollectionResponse),
        "value": n => { taskFileAttachmentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTaskFileAttachment) as any ; },
    }
}
