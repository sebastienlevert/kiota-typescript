import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ServiceAnnouncementAttachment} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceAnnouncementAttachment(serviceAnnouncementAttachment: ServiceAnnouncementAttachment | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(serviceAnnouncementAttachment),
        "content": n => { serviceAnnouncementAttachment.content = n.getStringValue() as any ; },
        "contentType": n => { serviceAnnouncementAttachment.contentType = n.getStringValue() as any ; },
        "lastModifiedDateTime": n => { serviceAnnouncementAttachment.lastModifiedDateTime = n.getDateValue() as any ; },
        "name": n => { serviceAnnouncementAttachment.name = n.getStringValue() as any ; },
        "size": n => { serviceAnnouncementAttachment.size = n.getNumberValue() as any ; },
    }
}
