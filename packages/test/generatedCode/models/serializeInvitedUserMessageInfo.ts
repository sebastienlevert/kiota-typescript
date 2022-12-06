import {InvitedUserMessageInfo} from './index';
import {serializeRecipient} from './serializeRecipient';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInvitedUserMessageInfo(writer: SerializationWriter, invitedUserMessageInfo: InvitedUserMessageInfo | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("ccRecipients", invitedUserMessageInfo.ccRecipients as any, serializeRecipient);
            writer.writeStringValue("customizedMessageBody", invitedUserMessageInfo.customizedMessageBody);
            writer.writeStringValue("messageLanguage", invitedUserMessageInfo.messageLanguage);
            writer.writeStringValue("@odata.type", invitedUserMessageInfo.odataType);
}
