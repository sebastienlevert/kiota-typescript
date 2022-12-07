import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SynchronizationProgress implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The numerator of a progress ratio; the number of units of changes already processed. */
    private _completedUnits?: number | undefined;
    /** The time of a progress observation as an offset in minutes from UTC. */
    private _progressObservationDateTime?: Date | undefined;
    /** The denominator of a progress ratio; a number of units of changes to be processed to accomplish synchronization. */
    private _totalUnits?: number | undefined;
    /** An optional description of the units. */
    private _units?: string | undefined;
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
     * Gets the completedUnits property value. The numerator of a progress ratio; the number of units of changes already processed.
     * @returns a int64
     */
    public get completedUnits() {
        return this._completedUnits;
    };
    /**
     * Sets the completedUnits property value. The numerator of a progress ratio; the number of units of changes already processed.
     * @param value Value to set for the completedUnits property.
     */
    public set completedUnits(value: number | undefined) {
        this._completedUnits = value;
    };
    /**
     * Instantiates a new synchronizationProgress and sets the default values.
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
            "completedUnits": n => { this.completedUnits = n.getNumberValue(); },
            "progressObservationDateTime": n => { this.progressObservationDateTime = n.getDateValue(); },
            "totalUnits": n => { this.totalUnits = n.getNumberValue(); },
            "units": n => { this.units = n.getStringValue(); },
        };
    };
    /**
     * Gets the progressObservationDateTime property value. The time of a progress observation as an offset in minutes from UTC.
     * @returns a Date
     */
    public get progressObservationDateTime() {
        return this._progressObservationDateTime;
    };
    /**
     * Sets the progressObservationDateTime property value. The time of a progress observation as an offset in minutes from UTC.
     * @param value Value to set for the progressObservationDateTime property.
     */
    public set progressObservationDateTime(value: Date | undefined) {
        this._progressObservationDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("completedUnits", this.completedUnits);
        writer.writeDateValue("progressObservationDateTime", this.progressObservationDateTime);
        writer.writeNumberValue("totalUnits", this.totalUnits);
        writer.writeStringValue("units", this.units);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the totalUnits property value. The denominator of a progress ratio; a number of units of changes to be processed to accomplish synchronization.
     * @returns a int64
     */
    public get totalUnits() {
        return this._totalUnits;
    };
    /**
     * Sets the totalUnits property value. The denominator of a progress ratio; a number of units of changes to be processed to accomplish synchronization.
     * @param value Value to set for the totalUnits property.
     */
    public set totalUnits(value: number | undefined) {
        this._totalUnits = value;
    };
    /**
     * Gets the units property value. An optional description of the units.
     * @returns a string
     */
    public get units() {
        return this._units;
    };
    /**
     * Sets the units property value. An optional description of the units.
     * @param value Value to set for the units property.
     */
    public set units(value: string | undefined) {
        this._units = value;
    };
}
