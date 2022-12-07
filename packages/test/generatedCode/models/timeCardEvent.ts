import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {ItemBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TimeCardEvent implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Indicates whether the entry was recorded at the approved location. */
    private _atApprovedLocation?: boolean | undefined;
    /** The time the entry is recorded. */
    private _dateTime?: Date | undefined;
    /** The notes property */
    private _notes?: ItemBody | undefined;
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
     * Gets the atApprovedLocation property value. Indicates whether the entry was recorded at the approved location.
     * @returns a boolean
     */
    public get atApprovedLocation() {
        return this._atApprovedLocation;
    };
    /**
     * Sets the atApprovedLocation property value. Indicates whether the entry was recorded at the approved location.
     * @param value Value to set for the atApprovedLocation property.
     */
    public set atApprovedLocation(value: boolean | undefined) {
        this._atApprovedLocation = value;
    };
    /**
     * Instantiates a new timeCardEvent and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the dateTime property value. The time the entry is recorded.
     * @returns a Date
     */
    public get dateTime() {
        return this._dateTime;
    };
    /**
     * Sets the dateTime property value. The time the entry is recorded.
     * @param value Value to set for the dateTime property.
     */
    public set dateTime(value: Date | undefined) {
        this._dateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "atApprovedLocation": n => { this.atApprovedLocation = n.getBooleanValue(); },
            "dateTime": n => { this.dateTime = n.getDateValue(); },
            "notes": n => { this.notes = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); },
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
        writer.writeBooleanValue("atApprovedLocation", this.atApprovedLocation);
        writer.writeDateValue("dateTime", this.dateTime);
        writer.writeObjectValue<ItemBody>("notes", this.notes);
        writer.writeAdditionalData(this.additionalData);
    };
}
