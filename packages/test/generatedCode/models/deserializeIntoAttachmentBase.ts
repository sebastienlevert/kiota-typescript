import {deserializeIntoEntity} from './deserializeIntoEntity';
import {AttachmentBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttachmentBase(attachmentBase: AttachmentBase | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(attachmentBase),
        "contentType": n => { attachmentBase.contentType = n.getStringValue() as any ; },
        "lastModifiedDateTime": n => { attachmentBase.lastModifiedDateTime = n.getDateValue() as any ; },
        "name": n => { attachmentBase.name = n.getStringValue() as any ; },
        "size": n => { attachmentBase.size = n.getNumberValue() as any ; },
    }
}
