import {DelegateMeetingMessageDeliveryOptions} from './delegateMeetingMessageDeliveryOptions';
import {AutomaticRepliesSetting, LocaleInfo, WorkingHours} from './index';
import {UserPurpose} from './userPurpose';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MailboxSettings extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Folder ID of an archive folder for the user. */
    archiveFolder?: string;
    /** Configuration settings to automatically notify the sender of an incoming email with a message from the signed-in user. */
    automaticRepliesSetting?: AutomaticRepliesSetting;
    /** The date format for the user's mailbox. */
    dateFormat?: string;
    /** If the user has a calendar delegate, this specifies whether the delegate, mailbox owner, or both receive meeting messages and meeting responses. Possible values are: sendToDelegateAndInformationToPrincipal, sendToDelegateAndPrincipal, sendToDelegateOnly. */
    delegateMeetingMessageDeliveryOptions?: DelegateMeetingMessageDeliveryOptions;
    /** The locale information for the user, including the preferred language and country/region. */
    language?: LocaleInfo;
    /** The OdataType property */
    odataType?: string;
    /** The time format for the user's mailbox. */
    timeFormat?: string;
    /** The default time zone for the user's mailbox. */
    timeZone?: string;
    /** The userPurpose property */
    userPurpose?: UserPurpose;
    /** The days of the week and hours in a specific time zone that the user works. */
    workingHours?: WorkingHours;
}
