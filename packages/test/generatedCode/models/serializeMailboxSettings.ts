import {DelegateMeetingMessageDeliveryOptions} from './delegateMeetingMessageDeliveryOptions';
import {MailboxSettings} from './index';
import {MailboxRecipientType} from './mailboxRecipientType';
import {serializeAutomaticRepliesSetting} from './serializeAutomaticRepliesSetting';
import {serializeLocaleInfo} from './serializeLocaleInfo';
import {serializeWorkingHours} from './serializeWorkingHours';
import {UserPurpose} from './userPurpose';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMailboxSettings(writer: SerializationWriter, mailboxSettings: MailboxSettings | undefined = {}) : void {
            writer.writeStringValue("archiveFolder", mailboxSettings.archiveFolder);
            writer.writeObjectValueFromMethod("automaticRepliesSetting", mailboxSettings.automaticRepliesSetting as any, serializeAutomaticRepliesSetting);
            writer.writeStringValue("dateFormat", mailboxSettings.dateFormat);
            writer.writeEnumValue<DelegateMeetingMessageDeliveryOptions>("delegateMeetingMessageDeliveryOptions", mailboxSettings.delegateMeetingMessageDeliveryOptions);
            writer.writeObjectValueFromMethod("language", mailboxSettings.language as any, serializeLocaleInfo);
            writer.writeStringValue("timeFormat", mailboxSettings.timeFormat);
            writer.writeStringValue("timeZone", mailboxSettings.timeZone);
            writer.writeEnumValue<UserPurpose>("userPurpose", mailboxSettings.userPurpose);
            writer.writeEnumValue<MailboxRecipientType>("userPurposeV2", mailboxSettings.userPurposeV2);
            writer.writeObjectValueFromMethod("workingHours", mailboxSettings.workingHours as any, serializeWorkingHours);
}
