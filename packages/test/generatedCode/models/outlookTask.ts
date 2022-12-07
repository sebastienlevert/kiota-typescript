import {createAttachmentFromDiscriminatorValue} from './createAttachmentFromDiscriminatorValue';
import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {createMultiValueLegacyExtendedPropertyFromDiscriminatorValue} from './createMultiValueLegacyExtendedPropertyFromDiscriminatorValue';
import {createPatternedRecurrenceFromDiscriminatorValue} from './createPatternedRecurrenceFromDiscriminatorValue';
import {createSingleValueLegacyExtendedPropertyFromDiscriminatorValue} from './createSingleValueLegacyExtendedPropertyFromDiscriminatorValue';
import {Importance} from './importance';
import {Attachment, DateTimeTimeZone, ItemBody, MultiValueLegacyExtendedProperty, OutlookItem, PatternedRecurrence, SingleValueLegacyExtendedProperty} from './index';
import {Sensitivity} from './sensitivity';
import {TaskStatus} from './taskStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OutlookTask extends OutlookItem implements Parsable {
    /** The name of the person who has been assigned the task in Outlook. Read-only. */
    private _assignedTo?: string | undefined;
    /** The collection of fileAttachment, itemAttachment, and referenceAttachment attachments for the task.  Read-only. Nullable. */
    private _attachments?: Attachment[] | undefined;
    /** The body property */
    private _body?: ItemBody | undefined;
    /** The completedDateTime property */
    private _completedDateTime?: DateTimeTimeZone | undefined;
    /** The dueDateTime property */
    private _dueDateTime?: DateTimeTimeZone | undefined;
    /** Set to true if the task has attachments. */
    private _hasAttachments?: boolean | undefined;
    /** The importance property */
    private _importance?: Importance | undefined;
    /** The isReminderOn property */
    private _isReminderOn?: boolean | undefined;
    /** The collection of multi-value extended properties defined for the task. Read-only. Nullable. */
    private _multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[] | undefined;
    /** The owner property */
    private _owner?: string | undefined;
    /** The parentFolderId property */
    private _parentFolderId?: string | undefined;
    /** The recurrence property */
    private _recurrence?: PatternedRecurrence | undefined;
    /** The reminderDateTime property */
    private _reminderDateTime?: DateTimeTimeZone | undefined;
    /** The sensitivity property */
    private _sensitivity?: Sensitivity | undefined;
    /** The collection of single-value extended properties defined for the task. Read-only. Nullable. */
    private _singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[] | undefined;
    /** The startDateTime property */
    private _startDateTime?: DateTimeTimeZone | undefined;
    /** The status property */
    private _status?: TaskStatus | undefined;
    /** The subject property */
    private _subject?: string | undefined;
    /**
     * Gets the assignedTo property value. The name of the person who has been assigned the task in Outlook. Read-only.
     * @returns a string
     */
    public get assignedTo() {
        return this._assignedTo;
    };
    /**
     * Sets the assignedTo property value. The name of the person who has been assigned the task in Outlook. Read-only.
     * @param value Value to set for the assignedTo property.
     */
    public set assignedTo(value: string | undefined) {
        this._assignedTo = value;
    };
    /**
     * Gets the attachments property value. The collection of fileAttachment, itemAttachment, and referenceAttachment attachments for the task.  Read-only. Nullable.
     * @returns a attachment
     */
    public get attachments() {
        return this._attachments;
    };
    /**
     * Sets the attachments property value. The collection of fileAttachment, itemAttachment, and referenceAttachment attachments for the task.  Read-only. Nullable.
     * @param value Value to set for the attachments property.
     */
    public set attachments(value: Attachment[] | undefined) {
        this._attachments = value;
    };
    /**
     * Gets the body property value. The body property
     * @returns a itemBody
     */
    public get body() {
        return this._body;
    };
    /**
     * Sets the body property value. The body property
     * @param value Value to set for the body property.
     */
    public set body(value: ItemBody | undefined) {
        this._body = value;
    };
    /**
     * Gets the completedDateTime property value. The completedDateTime property
     * @returns a dateTimeTimeZone
     */
    public get completedDateTime() {
        return this._completedDateTime;
    };
    /**
     * Sets the completedDateTime property value. The completedDateTime property
     * @param value Value to set for the completedDateTime property.
     */
    public set completedDateTime(value: DateTimeTimeZone | undefined) {
        this._completedDateTime = value;
    };
    /**
     * Instantiates a new outlookTask and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the dueDateTime property value. The dueDateTime property
     * @returns a dateTimeTimeZone
     */
    public get dueDateTime() {
        return this._dueDateTime;
    };
    /**
     * Sets the dueDateTime property value. The dueDateTime property
     * @param value Value to set for the dueDateTime property.
     */
    public set dueDateTime(value: DateTimeTimeZone | undefined) {
        this._dueDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "assignedTo": n => { this.assignedTo = n.getStringValue(); },
            "attachments": n => { this.attachments = n.getCollectionOfObjectValues<Attachment>(createAttachmentFromDiscriminatorValue); },
            "body": n => { this.body = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); },
            "completedDateTime": n => { this.completedDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "dueDateTime": n => { this.dueDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "hasAttachments": n => { this.hasAttachments = n.getBooleanValue(); },
            "importance": n => { this.importance = n.getEnumValue<Importance>(Importance); },
            "isReminderOn": n => { this.isReminderOn = n.getBooleanValue(); },
            "multiValueExtendedProperties": n => { this.multiValueExtendedProperties = n.getCollectionOfObjectValues<MultiValueLegacyExtendedProperty>(createMultiValueLegacyExtendedPropertyFromDiscriminatorValue); },
            "owner": n => { this.owner = n.getStringValue(); },
            "parentFolderId": n => { this.parentFolderId = n.getStringValue(); },
            "recurrence": n => { this.recurrence = n.getObjectValue<PatternedRecurrence>(createPatternedRecurrenceFromDiscriminatorValue); },
            "reminderDateTime": n => { this.reminderDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "sensitivity": n => { this.sensitivity = n.getEnumValue<Sensitivity>(Sensitivity); },
            "singleValueExtendedProperties": n => { this.singleValueExtendedProperties = n.getCollectionOfObjectValues<SingleValueLegacyExtendedProperty>(createSingleValueLegacyExtendedPropertyFromDiscriminatorValue); },
            "startDateTime": n => { this.startDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "status": n => { this.status = n.getEnumValue<TaskStatus>(TaskStatus); },
            "subject": n => { this.subject = n.getStringValue(); },
        };
    };
    /**
     * Gets the hasAttachments property value. Set to true if the task has attachments.
     * @returns a boolean
     */
    public get hasAttachments() {
        return this._hasAttachments;
    };
    /**
     * Sets the hasAttachments property value. Set to true if the task has attachments.
     * @param value Value to set for the hasAttachments property.
     */
    public set hasAttachments(value: boolean | undefined) {
        this._hasAttachments = value;
    };
    /**
     * Gets the importance property value. The importance property
     * @returns a importance
     */
    public get importance() {
        return this._importance;
    };
    /**
     * Sets the importance property value. The importance property
     * @param value Value to set for the importance property.
     */
    public set importance(value: Importance | undefined) {
        this._importance = value;
    };
    /**
     * Gets the isReminderOn property value. The isReminderOn property
     * @returns a boolean
     */
    public get isReminderOn() {
        return this._isReminderOn;
    };
    /**
     * Sets the isReminderOn property value. The isReminderOn property
     * @param value Value to set for the isReminderOn property.
     */
    public set isReminderOn(value: boolean | undefined) {
        this._isReminderOn = value;
    };
    /**
     * Gets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the task. Read-only. Nullable.
     * @returns a multiValueLegacyExtendedProperty
     */
    public get multiValueExtendedProperties() {
        return this._multiValueExtendedProperties;
    };
    /**
     * Sets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the task. Read-only. Nullable.
     * @param value Value to set for the multiValueExtendedProperties property.
     */
    public set multiValueExtendedProperties(value: MultiValueLegacyExtendedProperty[] | undefined) {
        this._multiValueExtendedProperties = value;
    };
    /**
     * Gets the owner property value. The owner property
     * @returns a string
     */
    public get owner() {
        return this._owner;
    };
    /**
     * Sets the owner property value. The owner property
     * @param value Value to set for the owner property.
     */
    public set owner(value: string | undefined) {
        this._owner = value;
    };
    /**
     * Gets the parentFolderId property value. The parentFolderId property
     * @returns a string
     */
    public get parentFolderId() {
        return this._parentFolderId;
    };
    /**
     * Sets the parentFolderId property value. The parentFolderId property
     * @param value Value to set for the parentFolderId property.
     */
    public set parentFolderId(value: string | undefined) {
        this._parentFolderId = value;
    };
    /**
     * Gets the recurrence property value. The recurrence property
     * @returns a patternedRecurrence
     */
    public get recurrence() {
        return this._recurrence;
    };
    /**
     * Sets the recurrence property value. The recurrence property
     * @param value Value to set for the recurrence property.
     */
    public set recurrence(value: PatternedRecurrence | undefined) {
        this._recurrence = value;
    };
    /**
     * Gets the reminderDateTime property value. The reminderDateTime property
     * @returns a dateTimeTimeZone
     */
    public get reminderDateTime() {
        return this._reminderDateTime;
    };
    /**
     * Sets the reminderDateTime property value. The reminderDateTime property
     * @param value Value to set for the reminderDateTime property.
     */
    public set reminderDateTime(value: DateTimeTimeZone | undefined) {
        this._reminderDateTime = value;
    };
    /**
     * Gets the sensitivity property value. The sensitivity property
     * @returns a sensitivity
     */
    public get sensitivity() {
        return this._sensitivity;
    };
    /**
     * Sets the sensitivity property value. The sensitivity property
     * @param value Value to set for the sensitivity property.
     */
    public set sensitivity(value: Sensitivity | undefined) {
        this._sensitivity = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("assignedTo", this.assignedTo);
        writer.writeCollectionOfObjectValues<Attachment>("attachments", this.attachments);
        writer.writeObjectValue<ItemBody>("body", this.body);
        writer.writeObjectValue<DateTimeTimeZone>("completedDateTime", this.completedDateTime);
        writer.writeObjectValue<DateTimeTimeZone>("dueDateTime", this.dueDateTime);
        writer.writeBooleanValue("hasAttachments", this.hasAttachments);
        writer.writeEnumValue<Importance>("importance", this.importance);
        writer.writeBooleanValue("isReminderOn", this.isReminderOn);
        writer.writeCollectionOfObjectValues<MultiValueLegacyExtendedProperty>("multiValueExtendedProperties", this.multiValueExtendedProperties);
        writer.writeStringValue("owner", this.owner);
        writer.writeStringValue("parentFolderId", this.parentFolderId);
        writer.writeObjectValue<PatternedRecurrence>("recurrence", this.recurrence);
        writer.writeObjectValue<DateTimeTimeZone>("reminderDateTime", this.reminderDateTime);
        writer.writeEnumValue<Sensitivity>("sensitivity", this.sensitivity);
        writer.writeCollectionOfObjectValues<SingleValueLegacyExtendedProperty>("singleValueExtendedProperties", this.singleValueExtendedProperties);
        writer.writeObjectValue<DateTimeTimeZone>("startDateTime", this.startDateTime);
        writer.writeEnumValue<TaskStatus>("status", this.status);
        writer.writeStringValue("subject", this.subject);
    };
    /**
     * Gets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the task. Read-only. Nullable.
     * @returns a singleValueLegacyExtendedProperty
     */
    public get singleValueExtendedProperties() {
        return this._singleValueExtendedProperties;
    };
    /**
     * Sets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the task. Read-only. Nullable.
     * @param value Value to set for the singleValueExtendedProperties property.
     */
    public set singleValueExtendedProperties(value: SingleValueLegacyExtendedProperty[] | undefined) {
        this._singleValueExtendedProperties = value;
    };
    /**
     * Gets the startDateTime property value. The startDateTime property
     * @returns a dateTimeTimeZone
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. The startDateTime property
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: DateTimeTimeZone | undefined) {
        this._startDateTime = value;
    };
    /**
     * Gets the status property value. The status property
     * @returns a taskStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: TaskStatus | undefined) {
        this._status = value;
    };
    /**
     * Gets the subject property value. The subject property
     * @returns a string
     */
    public get subject() {
        return this._subject;
    };
    /**
     * Sets the subject property value. The subject property
     * @param value Value to set for the subject property.
     */
    public set subject(value: string | undefined) {
        this._subject = value;
    };
}
