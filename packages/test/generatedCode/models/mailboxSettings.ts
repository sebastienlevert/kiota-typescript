import {DelegateMeetingMessageDeliveryOptions} from './delegateMeetingMessageDeliveryOptions';
import {AutomaticRepliesSetting, LocaleInfo, WorkingHours} from './index';
import {MailboxRecipientType} from './mailboxRecipientType';
import {UserPurpose} from './userPurpose';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MailboxSettings extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Folder ID of an archive folder for the user. Read only. */
    archiveFolder?: string;
    /** The automaticRepliesSetting property */
    automaticRepliesSetting?: AutomaticRepliesSetting;
    /** The date format for the user's mailbox. */
    dateFormat?: string;
    /** The delegateMeetingMessageDeliveryOptions property */
    delegateMeetingMessageDeliveryOptions?: DelegateMeetingMessageDeliveryOptions;
    /** The language property */
    language?: LocaleInfo;
    /** The time format for the user's mailbox. */
    timeFormat?: string;
    /** The default time zone for the user's mailbox. */
    timeZone?: string;
    /** The userPurpose property */
    userPurpose?: UserPurpose;
    /** The userPurposeV2 property */
    userPurposeV2?: MailboxRecipientType;
    /** The workingHours property */
    workingHours?: WorkingHours;
}
