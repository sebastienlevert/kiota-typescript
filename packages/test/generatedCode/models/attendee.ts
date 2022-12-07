import {createResponseStatusFromDiscriminatorValue} from './createResponseStatusFromDiscriminatorValue';
import {createTimeSlotFromDiscriminatorValue} from './createTimeSlotFromDiscriminatorValue';
import {AttendeeBase, ResponseStatus, TimeSlot} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Attendee extends AttendeeBase implements Parsable {
    /** The proposedNewTime property */
    private _proposedNewTime?: TimeSlot | undefined;
    /** The status property */
    private _status?: ResponseStatus | undefined;
    /**
     * Instantiates a new Attendee and sets the default values.
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
            "proposedNewTime": n => { this.proposedNewTime = n.getObjectValue<TimeSlot>(createTimeSlotFromDiscriminatorValue); },
            "status": n => { this.status = n.getObjectValue<ResponseStatus>(createResponseStatusFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the proposedNewTime property value. The proposedNewTime property
     * @returns a timeSlot
     */
    public get proposedNewTime() {
        return this._proposedNewTime;
    };
    /**
     * Sets the proposedNewTime property value. The proposedNewTime property
     * @param value Value to set for the proposedNewTime property.
     */
    public set proposedNewTime(value: TimeSlot | undefined) {
        this._proposedNewTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<TimeSlot>("proposedNewTime", this.proposedNewTime);
        writer.writeObjectValue<ResponseStatus>("status", this.status);
    };
    /**
     * Gets the status property value. The status property
     * @returns a responseStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: ResponseStatus | undefined) {
        this._status = value;
    };
}
