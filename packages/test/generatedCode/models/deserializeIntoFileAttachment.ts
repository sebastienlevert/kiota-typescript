import {deserializeIntoAttachment} from './deserializeIntoAttachment';
import {FileAttachment} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFileAttachment(fileAttachment: FileAttachment | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAttachment(fileAttachment),
        "contentBytes": n => { fileAttachment.contentBytes = n.getStringValue() as any ; },
        "contentId": n => { fileAttachment.contentId = n.getStringValue() as any ; },
        "contentLocation": n => { fileAttachment.contentLocation = n.getStringValue() as any ; },
    }
}
