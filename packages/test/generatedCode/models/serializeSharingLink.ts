import {SharingLink} from './index';
import {serializeIdentity} from './serializeIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSharingLink(writer: SerializationWriter, sharingLink: SharingLink | undefined = {}) : void {
            writer.writeObjectValueFromMethod("application", sharingLink.application as any, serializeIdentity);
            writer.writeStringValue("configuratorUrl", sharingLink.configuratorUrl);
            writer.writeBooleanValue("preventsDownload", sharingLink.preventsDownload);
            writer.writeStringValue("scope", sharingLink.scope);
            writer.writeStringValue("type", sharingLink.type);
            writer.writeStringValue("webHtml", sharingLink.webHtml);
            writer.writeStringValue("webUrl", sharingLink.webUrl);
}
