import {AttachmentBase} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttachmentBase(writer: SerializationWriter, attachmentBase: AttachmentBase | undefined = {}) : void {
        serializeEntity(writer, attachmentBase)
            writer.writeStringValue("contentType", attachmentBase.contentType);
            writer.writeDateValue("lastModifiedDateTime", attachmentBase.lastModifiedDateTime);
            writer.writeStringValue("name", attachmentBase.name);
            writer.writeNumberValue("size", attachmentBase.size);
}
