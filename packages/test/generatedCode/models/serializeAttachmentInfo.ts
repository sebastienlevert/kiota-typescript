import {AttachmentType} from './attachmentType';
import {AttachmentInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttachmentInfo(writer: SerializationWriter, attachmentInfo: AttachmentInfo | undefined = {}) : void {
            writer.writeEnumValue<AttachmentType>("attachmentType", attachmentInfo.attachmentType);
            writer.writeStringValue("contentType", attachmentInfo.contentType);
            writer.writeStringValue("name", attachmentInfo.name);
            writer.writeStringValue("@odata.type", attachmentInfo.odataType);
            writer.writeNumberValue("size", attachmentInfo.size);
}
