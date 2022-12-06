import {deserializeIntoAttachmentBase} from './deserializeIntoAttachmentBase';
import {TaskFileAttachment} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTaskFileAttachment(taskFileAttachment: TaskFileAttachment | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAttachmentBase(taskFileAttachment),
        "contentBytes": n => { taskFileAttachment.contentBytes = n.getStringValue() as any ; },
    }
}
