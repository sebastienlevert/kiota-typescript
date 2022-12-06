import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Attachment} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttachment(attachment: Attachment | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(attachment),
        "contentType": n => { attachment.contentType = n.getStringValue() as any ; },
        "isInline": n => { attachment.isInline = n.getBooleanValue() as any ; },
        "lastModifiedDateTime": n => { attachment.lastModifiedDateTime = n.getDateValue() as any ; },
        "name": n => { attachment.name = n.getStringValue() as any ; },
        "size": n => { attachment.size = n.getNumberValue() as any ; },
    }
}
