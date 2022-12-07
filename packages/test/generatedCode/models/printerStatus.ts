import {PrinterProcessingState} from './printerProcessingState';
import {PrinterProcessingStateDetail} from './printerProcessingStateDetail';
import {PrinterProcessingStateReason} from './printerProcessingStateReason';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrinterStatus implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** A human-readable description of the printer's current processing state. Read-only. */
    private _description?: string | undefined;
    /** The list of details describing why the printer is in the current state. Valid values are described in the following table. Read-only. */
    private _details?: PrinterProcessingStateDetail[] | undefined;
    /** The processingState property */
    private _processingState?: PrinterProcessingState | undefined;
    /** The processingStateDescription property */
    private _processingStateDescription?: string | undefined;
    /** The processingStateReasons property */
    private _processingStateReasons?: PrinterProcessingStateReason[] | undefined;
    /** The state property */
    private _state?: PrinterProcessingState | undefined;
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
     * Instantiates a new printerStatus and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the description property value. A human-readable description of the printer's current processing state. Read-only.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. A human-readable description of the printer's current processing state. Read-only.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the details property value. The list of details describing why the printer is in the current state. Valid values are described in the following table. Read-only.
     * @returns a printerProcessingStateDetail
     */
    public get details() {
        return this._details;
    };
    /**
     * Sets the details property value. The list of details describing why the printer is in the current state. Valid values are described in the following table. Read-only.
     * @param value Value to set for the details property.
     */
    public set details(value: PrinterProcessingStateDetail[] | undefined) {
        this._details = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "description": n => { this.description = n.getStringValue(); },
            "details": n => { this.details = n.getEnumValues<PrinterProcessingStateDetail>(PrinterProcessingStateDetail); },
            "processingState": n => { this.processingState = n.getEnumValue<PrinterProcessingState>(PrinterProcessingState); },
            "processingStateDescription": n => { this.processingStateDescription = n.getStringValue(); },
            "processingStateReasons": n => { this.processingStateReasons = n.getEnumValues<PrinterProcessingStateReason>(PrinterProcessingStateReason); },
            "state": n => { this.state = n.getEnumValue<PrinterProcessingState>(PrinterProcessingState); },
        };
    };
    /**
     * Gets the processingState property value. The processingState property
     * @returns a printerProcessingState
     */
    public get processingState() {
        return this._processingState;
    };
    /**
     * Sets the processingState property value. The processingState property
     * @param value Value to set for the processingState property.
     */
    public set processingState(value: PrinterProcessingState | undefined) {
        this._processingState = value;
    };
    /**
     * Gets the processingStateDescription property value. The processingStateDescription property
     * @returns a string
     */
    public get processingStateDescription() {
        return this._processingStateDescription;
    };
    /**
     * Sets the processingStateDescription property value. The processingStateDescription property
     * @param value Value to set for the processingStateDescription property.
     */
    public set processingStateDescription(value: string | undefined) {
        this._processingStateDescription = value;
    };
    /**
     * Gets the processingStateReasons property value. The processingStateReasons property
     * @returns a printerProcessingStateReason
     */
    public get processingStateReasons() {
        return this._processingStateReasons;
    };
    /**
     * Sets the processingStateReasons property value. The processingStateReasons property
     * @param value Value to set for the processingStateReasons property.
     */
    public set processingStateReasons(value: PrinterProcessingStateReason[] | undefined) {
        this._processingStateReasons = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("description", this.description);
        this.details && writer.writeEnumValue<PrinterProcessingStateDetail>("details", ...this.details);
        writer.writeEnumValue<PrinterProcessingState>("processingState", this.processingState);
        writer.writeStringValue("processingStateDescription", this.processingStateDescription);
        this.processingStateReasons && writer.writeEnumValue<PrinterProcessingStateReason>("processingStateReasons", ...this.processingStateReasons);
        writer.writeEnumValue<PrinterProcessingState>("state", this.state);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the state property value. The state property
     * @returns a printerProcessingState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The state property
     * @param value Value to set for the state property.
     */
    public set state(value: PrinterProcessingState | undefined) {
        this._state = value;
    };
}
