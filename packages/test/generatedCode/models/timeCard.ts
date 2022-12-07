import {ConfirmedBy} from './confirmedBy';
import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {createTimeCardBreakFromDiscriminatorValue} from './createTimeCardBreakFromDiscriminatorValue';
import {createTimeCardEntryFromDiscriminatorValue} from './createTimeCardEntryFromDiscriminatorValue';
import {createTimeCardEventFromDiscriminatorValue} from './createTimeCardEventFromDiscriminatorValue';
import {ChangeTrackedEntity, ItemBody, TimeCardBreak, TimeCardEntry, TimeCardEvent} from './index';
import {TimeCardState} from './timeCardState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TimeCard extends ChangeTrackedEntity implements Parsable {
    /** The list of breaks associated with the timeCard. */
    private _breaks?: TimeCardBreak[] | undefined;
    /** The clockInEvent property */
    private _clockInEvent?: TimeCardEvent | undefined;
    /** The clockOutEvent property */
    private _clockOutEvent?: TimeCardEvent | undefined;
    /** The confirmedBy property */
    private _confirmedBy?: ConfirmedBy | undefined;
    /** The notes property */
    private _notes?: ItemBody | undefined;
    /** The originalEntry property */
    private _originalEntry?: TimeCardEntry | undefined;
    /** The state property */
    private _state?: TimeCardState | undefined;
    /** User ID to which  the timeCard belongs. */
    private _userId?: string | undefined;
    /**
     * Gets the breaks property value. The list of breaks associated with the timeCard.
     * @returns a timeCardBreak
     */
    public get breaks() {
        return this._breaks;
    };
    /**
     * Sets the breaks property value. The list of breaks associated with the timeCard.
     * @param value Value to set for the breaks property.
     */
    public set breaks(value: TimeCardBreak[] | undefined) {
        this._breaks = value;
    };
    /**
     * Gets the clockInEvent property value. The clockInEvent property
     * @returns a timeCardEvent
     */
    public get clockInEvent() {
        return this._clockInEvent;
    };
    /**
     * Sets the clockInEvent property value. The clockInEvent property
     * @param value Value to set for the clockInEvent property.
     */
    public set clockInEvent(value: TimeCardEvent | undefined) {
        this._clockInEvent = value;
    };
    /**
     * Gets the clockOutEvent property value. The clockOutEvent property
     * @returns a timeCardEvent
     */
    public get clockOutEvent() {
        return this._clockOutEvent;
    };
    /**
     * Sets the clockOutEvent property value. The clockOutEvent property
     * @param value Value to set for the clockOutEvent property.
     */
    public set clockOutEvent(value: TimeCardEvent | undefined) {
        this._clockOutEvent = value;
    };
    /**
     * Gets the confirmedBy property value. The confirmedBy property
     * @returns a confirmedBy
     */
    public get confirmedBy() {
        return this._confirmedBy;
    };
    /**
     * Sets the confirmedBy property value. The confirmedBy property
     * @param value Value to set for the confirmedBy property.
     */
    public set confirmedBy(value: ConfirmedBy | undefined) {
        this._confirmedBy = value;
    };
    /**
     * Instantiates a new timeCard and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "breaks": n => { this.breaks = n.getCollectionOfObjectValues<TimeCardBreak>(createTimeCardBreakFromDiscriminatorValue); },
            "clockInEvent": n => { this.clockInEvent = n.getObjectValue<TimeCardEvent>(createTimeCardEventFromDiscriminatorValue); },
            "clockOutEvent": n => { this.clockOutEvent = n.getObjectValue<TimeCardEvent>(createTimeCardEventFromDiscriminatorValue); },
            "confirmedBy": n => { this.confirmedBy = n.getEnumValue<ConfirmedBy>(ConfirmedBy); },
            "notes": n => { this.notes = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); },
            "originalEntry": n => { this.originalEntry = n.getObjectValue<TimeCardEntry>(createTimeCardEntryFromDiscriminatorValue); },
            "state": n => { this.state = n.getEnumValue<TimeCardState>(TimeCardState); },
            "userId": n => { this.userId = n.getStringValue(); },
        };
    };
    /**
     * Gets the notes property value. The notes property
     * @returns a itemBody
     */
    public get notes() {
        return this._notes;
    };
    /**
     * Sets the notes property value. The notes property
     * @param value Value to set for the notes property.
     */
    public set notes(value: ItemBody | undefined) {
        this._notes = value;
    };
    /**
     * Gets the originalEntry property value. The originalEntry property
     * @returns a timeCardEntry
     */
    public get originalEntry() {
        return this._originalEntry;
    };
    /**
     * Sets the originalEntry property value. The originalEntry property
     * @param value Value to set for the originalEntry property.
     */
    public set originalEntry(value: TimeCardEntry | undefined) {
        this._originalEntry = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<TimeCardBreak>("breaks", this.breaks);
        writer.writeObjectValue<TimeCardEvent>("clockInEvent", this.clockInEvent);
        writer.writeObjectValue<TimeCardEvent>("clockOutEvent", this.clockOutEvent);
        writer.writeEnumValue<ConfirmedBy>("confirmedBy", this.confirmedBy);
        writer.writeObjectValue<ItemBody>("notes", this.notes);
        writer.writeObjectValue<TimeCardEntry>("originalEntry", this.originalEntry);
        writer.writeEnumValue<TimeCardState>("state", this.state);
        writer.writeStringValue("userId", this.userId);
    };
    /**
     * Gets the state property value. The state property
     * @returns a timeCardState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The state property
     * @param value Value to set for the state property.
     */
    public set state(value: TimeCardState | undefined) {
        this._state = value;
    };
    /**
     * Gets the userId property value. User ID to which  the timeCard belongs.
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. User ID to which  the timeCard belongs.
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
}
