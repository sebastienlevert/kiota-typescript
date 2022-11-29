import {Entity} from './entity';
import {Attachment} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttachment(attachment: Attachment | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntityInterface(attachment),
        "contentType": n => { attachment.contentType = n.getStringValue(); },
        "isInline": n => { attachment.isInline = n.getBooleanValue(); },
        "lastModifiedDateTime": n => { attachment.lastModifiedDateTime = n.getDateValue(); },
        "name": n => { attachment.name = n.getStringValue(); },
        "size": n => { attachment.size = n.getNumberValue(); },
    }
}
