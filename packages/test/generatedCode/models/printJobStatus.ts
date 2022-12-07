import {PrintJobProcessingState} from './printJobProcessingState';
import {PrintJobStateDetail} from './printJobStateDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintJobStatus implements AdditionalDataHolder, Parsable {
    /** The acquiredByPrinter property */
    private _acquiredByPrinter?: boolean | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** A human-readable description of the print job's current processing state. Read-only. */
    private _description?: string | undefined;
    /** Additional details for print job state. Valid values are described in the following table. Read-only. */
    private _details?: PrintJobStateDetail[] | undefined;
    /** True if the job was acknowledged by a printer; false otherwise. Read-only. */
    private _isAcquiredByPrinter?: boolean | undefined;
    /** The processingState property */
    private _processingState?: PrintJobProcessingState | undefined;
    /** The processingStateDescription property */
    private _processingStateDescription?: string | undefined;
    /** The state property */
    private _state?: PrintJobProcessingState | undefined;
    /**
     * Gets the acquiredByPrinter property value. The acquiredByPrinter property
     * @returns a boolean
     */
    public get acquiredByPrinter() {
        return this._acquiredByPrinter;
    };
    /**
     * Sets the acquiredByPrinter property value. The acquiredByPrinter property
     * @param value Value to set for the acquiredByPrinter property.
     */
    public set acquiredByPrinter(value: boolean | undefined) {
        this._acquiredByPrinter = value;
    };
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
     * Instantiates a new printJobStatus and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the description property value. A human-readable description of the print job's current processing state. Read-only.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. A human-readable description of the print job's current processing state. Read-only.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the details property value. Additional details for print job state. Valid values are described in the following table. Read-only.
     * @returns a printJobStateDetail
     */
    public get details() {
        return this._details;
    };
    /**
     * Sets the details property value. Additional details for print job state. Valid values are described in the following table. Read-only.
     * @param value Value to set for the details property.
     */
    public set details(value: PrintJobStateDetail[] | undefined) {
        this._details = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "acquiredByPrinter": n => { this.acquiredByPrinter = n.getBooleanValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "details": n => { this.details = n.getEnumValues<PrintJobStateDetail>(PrintJobStateDetail); },
            "isAcquiredByPrinter": n => { this.isAcquiredByPrinter = n.getBooleanValue(); },
            "processingState": n => { this.processingState = n.getEnumValue<PrintJobProcessingState>(PrintJobProcessingState); },
            "processingStateDescription": n => { this.processingStateDescription = n.getStringValue(); },
            "state": n => { this.state = n.getEnumValue<PrintJobProcessingState>(PrintJobProcessingState); },
        };
    };
    /**
     * Gets the isAcquiredByPrinter property value. True if the job was acknowledged by a printer; false otherwise. Read-only.
     * @returns a boolean
     */
    public get isAcquiredByPrinter() {
        return this._isAcquiredByPrinter;
    };
    /**
     * Sets the isAcquiredByPrinter property value. True if the job was acknowledged by a printer; false otherwise. Read-only.
     * @param value Value to set for the isAcquiredByPrinter property.
     */
    public set isAcquiredByPrinter(value: boolean | undefined) {
        this._isAcquiredByPrinter = value;
    };
    /**
     * Gets the processingState property value. The processingState property
     * @returns a printJobProcessingState
     */
    public get processingState() {
        return this._processingState;
    };
    /**
     * Sets the processingState property value. The processingState property
     * @param value Value to set for the processingState property.
     */
    public set processingState(value: PrintJobProcessingState | undefined) {
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("acquiredByPrinter", this.acquiredByPrinter);
        writer.writeStringValue("description", this.description);
        this.details && writer.writeEnumValue<PrintJobStateDetail>("details", ...this.details);
        writer.writeBooleanValue("isAcquiredByPrinter", this.isAcquiredByPrinter);
        writer.writeEnumValue<PrintJobProcessingState>("processingState", this.processingState);
        writer.writeStringValue("processingStateDescription", this.processingStateDescription);
        writer.writeEnumValue<PrintJobProcessingState>("state", this.state);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the state property value. The state property
     * @returns a printJobProcessingState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The state property
     * @param value Value to set for the state property.
     */
    public set state(value: PrintJobProcessingState | undefined) {
        this._state = value;
    };
}
