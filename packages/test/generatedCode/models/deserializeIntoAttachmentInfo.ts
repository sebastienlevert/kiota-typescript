import {AttachmentType} from './attachmentType';
import {AttachmentInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttachmentInfo(attachmentInfo: AttachmentInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "attachmentType": n => { attachmentInfo.attachmentType = n.getEnumValue<AttachmentType>(AttachmentType) as any ; },
        "contentType": n => { attachmentInfo.contentType = n.getStringValue() as any ; },
        "name": n => { attachmentInfo.name = n.getStringValue() as any ; },
        "@odata.type": n => { attachmentInfo.odataType = n.getStringValue() as any ; },
        "size": n => { attachmentInfo.size = n.getNumberValue() as any ; },
    }
}
