import {SynchronizationScheduleState} from './synchronizationScheduleState';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SynchronizationSchedule implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Date and time when this job will expire. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _expiration?: Date | undefined;
    /** The interval between synchronization iterations. The value is represented in ISO 8601 format for durations. For example, PT1M represents a period of 1 month. */
    private _interval?: Duration | undefined;
    /** The state property */
    private _state?: SynchronizationScheduleState | undefined;
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
     * Instantiates a new synchronizationSchedule and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the expiration property value. Date and time when this job will expire. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get expiration() {
        return this._expiration;
    };
    /**
     * Sets the expiration property value. Date and time when this job will expire. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the expiration property.
     */
    public set expiration(value: Date | undefined) {
        this._expiration = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "expiration": n => { this.expiration = n.getDateValue(); },
            "interval": n => { this.interval = n.getDurationValue(); },
            "state": n => { this.state = n.getEnumValue<SynchronizationScheduleState>(SynchronizationScheduleState); },
        };
    };
    /**
     * Gets the interval property value. The interval between synchronization iterations. The value is represented in ISO 8601 format for durations. For example, PT1M represents a period of 1 month.
     * @returns a Duration
     */
    public get interval() {
        return this._interval;
    };
    /**
     * Sets the interval property value. The interval between synchronization iterations. The value is represented in ISO 8601 format for durations. For example, PT1M represents a period of 1 month.
     * @param value Value to set for the interval property.
     */
    public set interval(value: Duration | undefined) {
        this._interval = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDateValue("expiration", this.expiration);
        writer.writeDurationValue("interval", this.interval);
        writer.writeEnumValue<SynchronizationScheduleState>("state", this.state);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the state property value. The state property
     * @returns a synchronizationScheduleState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The state property
     * @param value Value to set for the state property.
     */
    public set state(value: SynchronizationScheduleState | undefined) {
        this._state = value;
    };
}
