import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IntegerRange implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The inclusive upper bound of the integer range. */
    private _end?: number | undefined;
    /** The maximum property */
    private _maximum?: number | undefined;
    /** The minimum property */
    private _minimum?: number | undefined;
    /** The inclusive lower bound of the integer range. */
    private _start?: number | undefined;
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
     * Instantiates a new integerRange and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the end property value. The inclusive upper bound of the integer range.
     * @returns a int64
     */
    public get end() {
        return this._end;
    };
    /**
     * Sets the end property value. The inclusive upper bound of the integer range.
     * @param value Value to set for the end property.
     */
    public set end(value: number | undefined) {
        this._end = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "end": n => { this.end = n.getNumberValue(); },
            "maximum": n => { this.maximum = n.getNumberValue(); },
            "minimum": n => { this.minimum = n.getNumberValue(); },
            "start": n => { this.start = n.getNumberValue(); },
        };
    };
    /**
     * Gets the maximum property value. The maximum property
     * @returns a int64
     */
    public get maximum() {
        return this._maximum;
    };
    /**
     * Sets the maximum property value. The maximum property
     * @param value Value to set for the maximum property.
     */
    public set maximum(value: number | undefined) {
        this._maximum = value;
    };
    /**
     * Gets the minimum property value. The minimum property
     * @returns a int64
     */
    public get minimum() {
        return this._minimum;
    };
    /**
     * Sets the minimum property value. The minimum property
     * @param value Value to set for the minimum property.
     */
    public set minimum(value: number | undefined) {
        this._minimum = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("end", this.end);
        writer.writeNumberValue("maximum", this.maximum);
        writer.writeNumberValue("minimum", this.minimum);
        writer.writeNumberValue("start", this.start);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the start property value. The inclusive lower bound of the integer range.
     * @returns a int64
     */
    public get start() {
        return this._start;
    };
    /**
     * Sets the start property value. The inclusive lower bound of the integer range.
     * @param value Value to set for the start property.
     */
    public set start(value: number | undefined) {
        this._start = value;
    };
}
