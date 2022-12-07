import {createAutomaticRepliesSettingFromDiscriminatorValue} from './createAutomaticRepliesSettingFromDiscriminatorValue';
import {createLocaleInfoFromDiscriminatorValue} from './createLocaleInfoFromDiscriminatorValue';
import {createWorkingHoursFromDiscriminatorValue} from './createWorkingHoursFromDiscriminatorValue';
import {DelegateMeetingMessageDeliveryOptions} from './delegateMeetingMessageDeliveryOptions';
import {AutomaticRepliesSetting, LocaleInfo, WorkingHours} from './index';
import {MailboxRecipientType} from './mailboxRecipientType';
import {UserPurpose} from './userPurpose';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MailboxSettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Folder ID of an archive folder for the user. Read only. */
    private _archiveFolder?: string | undefined;
    /** The automaticRepliesSetting property */
    private _automaticRepliesSetting?: AutomaticRepliesSetting | undefined;
    /** The date format for the user's mailbox. */
    private _dateFormat?: string | undefined;
    /** The delegateMeetingMessageDeliveryOptions property */
    private _delegateMeetingMessageDeliveryOptions?: DelegateMeetingMessageDeliveryOptions | undefined;
    /** The language property */
    private _language?: LocaleInfo | undefined;
    /** The time format for the user's mailbox. */
    private _timeFormat?: string | undefined;
    /** The default time zone for the user's mailbox. */
    private _timeZone?: string | undefined;
    /** The userPurpose property */
    private _userPurpose?: UserPurpose | undefined;
    /** The userPurposeV2 property */
    private _userPurposeV2?: MailboxRecipientType | undefined;
    /** The workingHours property */
    private _workingHours?: WorkingHours | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the archiveFolder property value. Folder ID of an archive folder for the user. Read only.
     * @returns a string
     */
    public get archiveFolder() {
        return this._archiveFolder;
    };
    /**
     * Sets the archiveFolder property value. Folder ID of an archive folder for the user. Read only.
     * @param value Value to set for the archiveFolder property.
     */
    public set archiveFolder(value: string | undefined) {
        this._archiveFolder = value;
    };
    /**
     * Gets the automaticRepliesSetting property value. The automaticRepliesSetting property
     * @returns a automaticRepliesSetting
     */
    public get automaticRepliesSetting() {
        return this._automaticRepliesSetting;
    };
    /**
     * Sets the automaticRepliesSetting property value. The automaticRepliesSetting property
     * @param value Value to set for the automaticRepliesSetting property.
     */
    public set automaticRepliesSetting(value: AutomaticRepliesSetting | undefined) {
        this._automaticRepliesSetting = value;
    };
    /**
     * Instantiates a new mailboxSettings and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the dateFormat property value. The date format for the user's mailbox.
     * @returns a string
     */
    public get dateFormat() {
        return this._dateFormat;
    };
    /**
     * Sets the dateFormat property value. The date format for the user's mailbox.
     * @param value Value to set for the dateFormat property.
     */
    public set dateFormat(value: string | undefined) {
        this._dateFormat = value;
    };
    /**
     * Gets the delegateMeetingMessageDeliveryOptions property value. The delegateMeetingMessageDeliveryOptions property
     * @returns a delegateMeetingMessageDeliveryOptions
     */
    public get delegateMeetingMessageDeliveryOptions() {
        return this._delegateMeetingMessageDeliveryOptions;
    };
    /**
     * Sets the delegateMeetingMessageDeliveryOptions property value. The delegateMeetingMessageDeliveryOptions property
     * @param value Value to set for the delegateMeetingMessageDeliveryOptions property.
     */
    public set delegateMeetingMessageDeliveryOptions(value: DelegateMeetingMessageDeliveryOptions | undefined) {
        this._delegateMeetingMessageDeliveryOptions = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "archiveFolder": n => { this.archiveFolder = n.getStringValue(); },
            "automaticRepliesSetting": n => { this.automaticRepliesSetting = n.getObjectValue<AutomaticRepliesSetting>(createAutomaticRepliesSettingFromDiscriminatorValue); },
            "dateFormat": n => { this.dateFormat = n.getStringValue(); },
            "delegateMeetingMessageDeliveryOptions": n => { this.delegateMeetingMessageDeliveryOptions = n.getEnumValue<DelegateMeetingMessageDeliveryOptions>(DelegateMeetingMessageDeliveryOptions); },
            "language": n => { this.language = n.getObjectValue<LocaleInfo>(createLocaleInfoFromDiscriminatorValue); },
            "timeFormat": n => { this.timeFormat = n.getStringValue(); },
            "timeZone": n => { this.timeZone = n.getStringValue(); },
            "userPurpose": n => { this.userPurpose = n.getEnumValue<UserPurpose>(UserPurpose); },
            "userPurposeV2": n => { this.userPurposeV2 = n.getEnumValue<MailboxRecipientType>(MailboxRecipientType); },
            "workingHours": n => { this.workingHours = n.getObjectValue<WorkingHours>(createWorkingHoursFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the language property value. The language property
     * @returns a localeInfo
     */
    public get language() {
        return this._language;
    };
    /**
     * Sets the language property value. The language property
     * @param value Value to set for the language property.
     */
    public set language(value: LocaleInfo | undefined) {
        this._language = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("archiveFolder", this.archiveFolder);
        writer.writeObjectValue<AutomaticRepliesSetting>("automaticRepliesSetting", this.automaticRepliesSetting);
        writer.writeStringValue("dateFormat", this.dateFormat);
        writer.writeEnumValue<DelegateMeetingMessageDeliveryOptions>("delegateMeetingMessageDeliveryOptions", this.delegateMeetingMessageDeliveryOptions);
        writer.writeObjectValue<LocaleInfo>("language", this.language);
        writer.writeStringValue("timeFormat", this.timeFormat);
        writer.writeStringValue("timeZone", this.timeZone);
        writer.writeEnumValue<UserPurpose>("userPurpose", this.userPurpose);
        writer.writeEnumValue<MailboxRecipientType>("userPurposeV2", this.userPurposeV2);
        writer.writeObjectValue<WorkingHours>("workingHours", this.workingHours);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the timeFormat property value. The time format for the user's mailbox.
     * @returns a string
     */
    public get timeFormat() {
        return this._timeFormat;
    };
    /**
     * Sets the timeFormat property value. The time format for the user's mailbox.
     * @param value Value to set for the timeFormat property.
     */
    public set timeFormat(value: string | undefined) {
        this._timeFormat = value;
    };
    /**
     * Gets the timeZone property value. The default time zone for the user's mailbox.
     * @returns a string
     */
    public get timeZone() {
        return this._timeZone;
    };
    /**
     * Sets the timeZone property value. The default time zone for the user's mailbox.
     * @param value Value to set for the timeZone property.
     */
    public set timeZone(value: string | undefined) {
        this._timeZone = value;
    };
    /**
     * Gets the userPurpose property value. The userPurpose property
     * @returns a userPurpose
     */
    public get userPurpose() {
        return this._userPurpose;
    };
    /**
     * Sets the userPurpose property value. The userPurpose property
     * @param value Value to set for the userPurpose property.
     */
    public set userPurpose(value: UserPurpose | undefined) {
        this._userPurpose = value;
    };
    /**
     * Gets the userPurposeV2 property value. The userPurposeV2 property
     * @returns a mailboxRecipientType
     */
    public get userPurposeV2() {
        return this._userPurposeV2;
    };
    /**
     * Sets the userPurposeV2 property value. The userPurposeV2 property
     * @param value Value to set for the userPurposeV2 property.
     */
    public set userPurposeV2(value: MailboxRecipientType | undefined) {
        this._userPurposeV2 = value;
    };
    /**
     * Gets the workingHours property value. The workingHours property
     * @returns a workingHours
     */
    public get workingHours() {
        return this._workingHours;
    };
    /**
     * Sets the workingHours property value. The workingHours property
     * @param value Value to set for the workingHours property.
     */
    public set workingHours(value: WorkingHours | undefined) {
        this._workingHours = value;
    };
}
