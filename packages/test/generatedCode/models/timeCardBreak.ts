import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {createTimeCardEventFromDiscriminatorValue} from './createTimeCardEventFromDiscriminatorValue';
import {ItemBody, TimeCardEvent} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TimeCardBreak implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** ID of the timeCardBreak. */
    private _breakId?: string | undefined;
    /** The end property */
    private _end?: TimeCardEvent | undefined;
    /** The notes property */
    private _notes?: ItemBody | undefined;
    /** The start property */
    private _start?: TimeCardEvent | undefined;
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
     * Gets the breakId property value. ID of the timeCardBreak.
     * @returns a string
     */
    public get breakId() {
        return this._breakId;
    };
    /**
     * Sets the breakId property value. ID of the timeCardBreak.
     * @param value Value to set for the breakId property.
     */
    public set breakId(value: string | undefined) {
        this._breakId = value;
    };
    /**
     * Instantiates a new timeCardBreak and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the end property value. The end property
     * @returns a timeCardEvent
     */
    public get end() {
        return this._end;
    };
    /**
     * Sets the end property value. The end property
     * @param value Value to set for the end property.
     */
    public set end(value: TimeCardEvent | undefined) {
        this._end = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "breakId": n => { this.breakId = n.getStringValue(); },
            "end": n => { this.end = n.getObjectValue<TimeCardEvent>(createTimeCardEventFromDiscriminatorValue); },
            "notes": n => { this.notes = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); },
            "start": n => { this.start = n.getObjectValue<TimeCardEvent>(createTimeCardEventFromDiscriminatorValue); },
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("breakId", this.breakId);
        writer.writeObjectValue<TimeCardEvent>("end", this.end);
        writer.writeObjectValue<ItemBody>("notes", this.notes);
        writer.writeObjectValue<TimeCardEvent>("start", this.start);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the start property value. The start property
     * @returns a timeCardEvent
     */
    public get start() {
        return this._start;
    };
    /**
     * Sets the start property value. The start property
     * @param value Value to set for the start property.
     */
    public set start(value: TimeCardEvent | undefined) {
        this._start = value;
    };
}
