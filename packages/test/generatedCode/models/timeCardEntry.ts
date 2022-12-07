import {createTimeCardBreakFromDiscriminatorValue} from './createTimeCardBreakFromDiscriminatorValue';
import {createTimeCardEventFromDiscriminatorValue} from './createTimeCardEventFromDiscriminatorValue';
import {TimeCardBreak, TimeCardEvent} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TimeCardEntry implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The list of breaks associated with the timeCard. */
    private _breaks?: TimeCardBreak[] | undefined;
    /** The clockInEvent property */
    private _clockInEvent?: TimeCardEvent | undefined;
    /** The clockOutEvent property */
    private _clockOutEvent?: TimeCardEvent | undefined;
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
     * Instantiates a new timeCardEntry and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "breaks": n => { this.breaks = n.getCollectionOfObjectValues<TimeCardBreak>(createTimeCardBreakFromDiscriminatorValue); },
            "clockInEvent": n => { this.clockInEvent = n.getObjectValue<TimeCardEvent>(createTimeCardEventFromDiscriminatorValue); },
            "clockOutEvent": n => { this.clockOutEvent = n.getObjectValue<TimeCardEvent>(createTimeCardEventFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<TimeCardBreak>("breaks", this.breaks);
        writer.writeObjectValue<TimeCardEvent>("clockInEvent", this.clockInEvent);
        writer.writeObjectValue<TimeCardEvent>("clockOutEvent", this.clockOutEvent);
        writer.writeAdditionalData(this.additionalData);
    };
}
