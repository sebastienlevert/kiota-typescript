import {ServiceAnnouncementAttachment} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServiceAnnouncementAttachment(writer: SerializationWriter, serviceAnnouncementAttachment: ServiceAnnouncementAttachment | undefined = {}) : void {
        serializeEntity(writer, serviceAnnouncementAttachment)
            writer.writeStringValue("content", serviceAnnouncementAttachment.content);
            writer.writeStringValue("contentType", serviceAnnouncementAttachment.contentType);
            writer.writeDateValue("lastModifiedDateTime", serviceAnnouncementAttachment.lastModifiedDateTime);
            writer.writeStringValue("name", serviceAnnouncementAttachment.name);
            writer.writeNumberValue("size", serviceAnnouncementAttachment.size);
}
