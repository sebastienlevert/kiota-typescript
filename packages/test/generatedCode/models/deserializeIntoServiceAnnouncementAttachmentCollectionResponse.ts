import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoServiceAnnouncementAttachment} from './deserializeIntoServiceAnnouncementAttachment';
import {ServiceAnnouncementAttachmentCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceAnnouncementAttachmentCollectionResponse(serviceAnnouncementAttachmentCollectionResponse: ServiceAnnouncementAttachmentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(serviceAnnouncementAttachmentCollectionResponse),
        "value": n => { serviceAnnouncementAttachmentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoServiceAnnouncementAttachment) as any ; },
    }
}
