import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ItemActivityTimeSet implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The lastRecordedDateTime property */
    private _lastRecordedDateTime?: Date | undefined;
    /** When the activity was observed to take place. */
    private _observedDateTime?: Date | undefined;
    /** When the observation was recorded on the service. */
    private _recordedDateTime?: Date | undefined;
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
     * Instantiates a new itemActivityTimeSet and sets the default values.
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
            "lastRecordedDateTime": n => { this.lastRecordedDateTime = n.getDateValue(); },
            "observedDateTime": n => { this.observedDateTime = n.getDateValue(); },
            "recordedDateTime": n => { this.recordedDateTime = n.getDateValue(); },
        };
    };
    /**
     * Gets the lastRecordedDateTime property value. The lastRecordedDateTime property
     * @returns a Date
     */
    public get lastRecordedDateTime() {
        return this._lastRecordedDateTime;
    };
    /**
     * Sets the lastRecordedDateTime property value. The lastRecordedDateTime property
     * @param value Value to set for the lastRecordedDateTime property.
     */
    public set lastRecordedDateTime(value: Date | undefined) {
        this._lastRecordedDateTime = value;
    };
    /**
     * Gets the observedDateTime property value. When the activity was observed to take place.
     * @returns a Date
     */
    public get observedDateTime() {
        return this._observedDateTime;
    };
    /**
     * Sets the observedDateTime property value. When the activity was observed to take place.
     * @param value Value to set for the observedDateTime property.
     */
    public set observedDateTime(value: Date | undefined) {
        this._observedDateTime = value;
    };
    /**
     * Gets the recordedDateTime property value. When the observation was recorded on the service.
     * @returns a Date
     */
    public get recordedDateTime() {
        return this._recordedDateTime;
    };
    /**
     * Sets the recordedDateTime property value. When the observation was recorded on the service.
     * @param value Value to set for the recordedDateTime property.
     */
    public set recordedDateTime(value: Date | undefined) {
        this._recordedDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDateValue("lastRecordedDateTime", this.lastRecordedDateTime);
        writer.writeDateValue("observedDateTime", this.observedDateTime);
        writer.writeDateValue("recordedDateTime", this.recordedDateTime);
        writer.writeAdditionalData(this.additionalData);
    };
}
