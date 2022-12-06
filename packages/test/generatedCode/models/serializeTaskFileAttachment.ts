import {TaskFileAttachment} from './index';
import {serializeAttachmentBase} from './serializeAttachmentBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTaskFileAttachment(writer: SerializationWriter, taskFileAttachment: TaskFileAttachment | undefined = {}) : void {
        serializeAttachmentBase(writer, taskFileAttachment)
            writer.writeStringValue("contentBytes", taskFileAttachment.contentBytes);
}
