import {deserializeIntoEntity} from './deserializeIntoEntity';
import {AttachmentSession} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttachmentSession(attachmentSession: AttachmentSession | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(attachmentSession),
        "content": n => { attachmentSession.content = n.getStringValue() as any ; },
        "expirationDateTime": n => { attachmentSession.expirationDateTime = n.getDateValue() as any ; },
        "nextExpectedRanges": n => { attachmentSession.nextExpectedRanges = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
