import {AttachmentType} from './attachmentType';
import {AttachmentItem} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttachmentItem(attachmentItem: AttachmentItem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "attachmentType": n => { attachmentItem.attachmentType = n.getEnumValue<AttachmentType>(AttachmentType) as any ; },
        "contentId": n => { attachmentItem.contentId = n.getStringValue() as any ; },
        "contentType": n => { attachmentItem.contentType = n.getStringValue() as any ; },
        "isInline": n => { attachmentItem.isInline = n.getBooleanValue() as any ; },
        "name": n => { attachmentItem.name = n.getStringValue() as any ; },
        "@odata.type": n => { attachmentItem.odataType = n.getStringValue() as any ; },
        "size": n => { attachmentItem.size = n.getNumberValue() as any ; },
    }
}
