import {DelegateMeetingMessageDeliveryOptions} from './delegateMeetingMessageDeliveryOptions';
import {deserializeIntoAutomaticRepliesSetting} from './deserializeIntoAutomaticRepliesSetting';
import {deserializeIntoLocaleInfo} from './deserializeIntoLocaleInfo';
import {deserializeIntoWorkingHours} from './deserializeIntoWorkingHours';
import {MailboxSettings} from './index';
import {MailboxRecipientType} from './mailboxRecipientType';
import {UserPurpose} from './userPurpose';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMailboxSettings(mailboxSettings: MailboxSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "archiveFolder": n => { mailboxSettings.archiveFolder = n.getStringValue() as any ; },
        "automaticRepliesSetting": n => { mailboxSettings.automaticRepliesSetting = n.getObject(deserializeIntoAutomaticRepliesSetting) as any ; },
        "dateFormat": n => { mailboxSettings.dateFormat = n.getStringValue() as any ; },
        "delegateMeetingMessageDeliveryOptions": n => { mailboxSettings.delegateMeetingMessageDeliveryOptions = n.getEnumValue<DelegateMeetingMessageDeliveryOptions>(DelegateMeetingMessageDeliveryOptions) as any ; },
        "language": n => { mailboxSettings.language = n.getObject(deserializeIntoLocaleInfo) as any ; },
        "timeFormat": n => { mailboxSettings.timeFormat = n.getStringValue() as any ; },
        "timeZone": n => { mailboxSettings.timeZone = n.getStringValue() as any ; },
        "userPurpose": n => { mailboxSettings.userPurpose = n.getEnumValue<UserPurpose>(UserPurpose) as any ; },
        "userPurposeV2": n => { mailboxSettings.userPurposeV2 = n.getEnumValue<MailboxRecipientType>(MailboxRecipientType) as any ; },
        "workingHours": n => { mailboxSettings.workingHours = n.getObject(deserializeIntoWorkingHours) as any ; },
    }
}
