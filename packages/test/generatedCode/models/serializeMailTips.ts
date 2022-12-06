import {MailTips} from './index';
import {RecipientScopeType} from './recipientScopeType';
import {serializeAutomaticRepliesMailTips} from './serializeAutomaticRepliesMailTips';
import {serializeEmailAddress} from './serializeEmailAddress';
import {serializeMailTipsError} from './serializeMailTipsError';
import {serializeRecipient} from './serializeRecipient';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMailTips(writer: SerializationWriter, mailTips: MailTips | undefined = {}) : void {
            writer.writeObjectValueFromMethod("automaticReplies", mailTips.automaticReplies as any, serializeAutomaticRepliesMailTips);
            writer.writeStringValue("customMailTip", mailTips.customMailTip);
            writer.writeBooleanValue("deliveryRestricted", mailTips.deliveryRestricted);
            writer.writeObjectValueFromMethod("emailAddress", mailTips.emailAddress as any, serializeEmailAddress);
            writer.writeObjectValueFromMethod("error_escaped", mailTips.error_escaped as any, serializeMailTipsError);
            writer.writeNumberValue("externalMemberCount", mailTips.externalMemberCount);
            writer.writeBooleanValue("isModerated", mailTips.isModerated);
            writer.writeBooleanValue("mailboxFull", mailTips.mailboxFull);
            writer.writeNumberValue("maxMessageSize", mailTips.maxMessageSize);
            writer.writeStringValue("@odata.type", mailTips.odataType);
            writer.writeEnumValue<RecipientScopeType>("recipientScope", mailTips.recipientScope);
            writer.writeCollectionOfObjectValuesFromMethod("recipientSuggestions", mailTips.recipientSuggestions as any, serializeRecipient);
            writer.writeNumberValue("totalMemberCount", mailTips.totalMemberCount);
}
