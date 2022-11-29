import {Entity} from './entity';
import {Attachment} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttachment(writer: SerializationWriter, attachment: Attachment | undefined = {}) : void {
        serializeEntityInterface(attachment)
            writer.writeStringValue("contentType", attachment.contentType);
            writer.writeBooleanValue("isInline", attachment.isInline);
            writer.writeDateValue("lastModifiedDateTime", attachment.lastModifiedDateTime);
            writer.writeStringValue("name", attachment.name);
            writer.writeNumberValue("size", attachment.size);
}
