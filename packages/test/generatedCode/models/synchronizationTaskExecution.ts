import {createSynchronizationErrorFromDiscriminatorValue} from './createSynchronizationErrorFromDiscriminatorValue';
import {SynchronizationError} from './index';
import {SynchronizationTaskExecutionResult} from './synchronizationTaskExecutionResult';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SynchronizationTaskExecution implements AdditionalDataHolder, Parsable {
    /** Identifier of the job run. */
    private _activityIdentifier?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Count of processed entries that were assigned for this application. */
    private _countEntitled?: number | undefined;
    /** Count of processed entries that were assigned for provisioning. */
    private _countEntitledForProvisioning?: number | undefined;
    /** Count of entries that were escrowed (errors). */
    private _countEscrowed?: number | undefined;
    /** Count of entries that were escrowed, including system-generated escrows. */
    private _countEscrowedRaw?: number | undefined;
    /** Count of exported entries. */
    private _countExported?: number | undefined;
    /** Count of entries that were expected to be exported. */
    private _countExports?: number | undefined;
    /** Count of imported entries. */
    private _countImported?: number | undefined;
    /** Count of imported delta-changes. */
    private _countImportedDeltas?: number | undefined;
    /** Count of imported delta-changes pertaining to reference changes. */
    private _countImportedReferenceDeltas?: number | undefined;
    /** The error property */
    private _error_escaped?: SynchronizationError | undefined;
    /** The state property */
    private _state?: SynchronizationTaskExecutionResult | undefined;
    /** Time when this job run began. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _timeBegan?: Date | undefined;
    /** Time when this job run ended. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _timeEnded?: Date | undefined;
    /**
     * Gets the activityIdentifier property value. Identifier of the job run.
     * @returns a string
     */
    public get activityIdentifier() {
        return this._activityIdentifier;
    };
    /**
     * Sets the activityIdentifier property value. Identifier of the job run.
     * @param value Value to set for the activityIdentifier property.
     */
    public set activityIdentifier(value: string | undefined) {
        this._activityIdentifier = value;
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
     * Instantiates a new synchronizationTaskExecution and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the countEntitled property value. Count of processed entries that were assigned for this application.
     * @returns a int64
     */
    public get countEntitled() {
        return this._countEntitled;
    };
    /**
     * Sets the countEntitled property value. Count of processed entries that were assigned for this application.
     * @param value Value to set for the countEntitled property.
     */
    public set countEntitled(value: number | undefined) {
        this._countEntitled = value;
    };
    /**
     * Gets the countEntitledForProvisioning property value. Count of processed entries that were assigned for provisioning.
     * @returns a int64
     */
    public get countEntitledForProvisioning() {
        return this._countEntitledForProvisioning;
    };
    /**
     * Sets the countEntitledForProvisioning property value. Count of processed entries that were assigned for provisioning.
     * @param value Value to set for the countEntitledForProvisioning property.
     */
    public set countEntitledForProvisioning(value: number | undefined) {
        this._countEntitledForProvisioning = value;
    };
    /**
     * Gets the countEscrowed property value. Count of entries that were escrowed (errors).
     * @returns a int64
     */
    public get countEscrowed() {
        return this._countEscrowed;
    };
    /**
     * Sets the countEscrowed property value. Count of entries that were escrowed (errors).
     * @param value Value to set for the countEscrowed property.
     */
    public set countEscrowed(value: number | undefined) {
        this._countEscrowed = value;
    };
    /**
     * Gets the countEscrowedRaw property value. Count of entries that were escrowed, including system-generated escrows.
     * @returns a int64
     */
    public get countEscrowedRaw() {
        return this._countEscrowedRaw;
    };
    /**
     * Sets the countEscrowedRaw property value. Count of entries that were escrowed, including system-generated escrows.
     * @param value Value to set for the countEscrowedRaw property.
     */
    public set countEscrowedRaw(value: number | undefined) {
        this._countEscrowedRaw = value;
    };
    /**
     * Gets the countExported property value. Count of exported entries.
     * @returns a int64
     */
    public get countExported() {
        return this._countExported;
    };
    /**
     * Sets the countExported property value. Count of exported entries.
     * @param value Value to set for the countExported property.
     */
    public set countExported(value: number | undefined) {
        this._countExported = value;
    };
    /**
     * Gets the countExports property value. Count of entries that were expected to be exported.
     * @returns a int64
     */
    public get countExports() {
        return this._countExports;
    };
    /**
     * Sets the countExports property value. Count of entries that were expected to be exported.
     * @param value Value to set for the countExports property.
     */
    public set countExports(value: number | undefined) {
        this._countExports = value;
    };
    /**
     * Gets the countImported property value. Count of imported entries.
     * @returns a int64
     */
    public get countImported() {
        return this._countImported;
    };
    /**
     * Sets the countImported property value. Count of imported entries.
     * @param value Value to set for the countImported property.
     */
    public set countImported(value: number | undefined) {
        this._countImported = value;
    };
    /**
     * Gets the countImportedDeltas property value. Count of imported delta-changes.
     * @returns a int64
     */
    public get countImportedDeltas() {
        return this._countImportedDeltas;
    };
    /**
     * Sets the countImportedDeltas property value. Count of imported delta-changes.
     * @param value Value to set for the countImportedDeltas property.
     */
    public set countImportedDeltas(value: number | undefined) {
        this._countImportedDeltas = value;
    };
    /**
     * Gets the countImportedReferenceDeltas property value. Count of imported delta-changes pertaining to reference changes.
     * @returns a int64
     */
    public get countImportedReferenceDeltas() {
        return this._countImportedReferenceDeltas;
    };
    /**
     * Sets the countImportedReferenceDeltas property value. Count of imported delta-changes pertaining to reference changes.
     * @param value Value to set for the countImportedReferenceDeltas property.
     */
    public set countImportedReferenceDeltas(value: number | undefined) {
        this._countImportedReferenceDeltas = value;
    };
    /**
     * Gets the error property value. The error property
     * @returns a synchronizationError
     */
    public get error_escaped() {
        return this._error_escaped;
    };
    /**
     * Sets the error property value. The error property
     * @param value Value to set for the error_escaped property.
     */
    public set error_escaped(value: SynchronizationError | undefined) {
        this._error_escaped = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "activityIdentifier": n => { this.activityIdentifier = n.getStringValue(); },
            "countEntitled": n => { this.countEntitled = n.getNumberValue(); },
            "countEntitledForProvisioning": n => { this.countEntitledForProvisioning = n.getNumberValue(); },
            "countEscrowed": n => { this.countEscrowed = n.getNumberValue(); },
            "countEscrowedRaw": n => { this.countEscrowedRaw = n.getNumberValue(); },
            "countExported": n => { this.countExported = n.getNumberValue(); },
            "countExports": n => { this.countExports = n.getNumberValue(); },
            "countImported": n => { this.countImported = n.getNumberValue(); },
            "countImportedDeltas": n => { this.countImportedDeltas = n.getNumberValue(); },
            "countImportedReferenceDeltas": n => { this.countImportedReferenceDeltas = n.getNumberValue(); },
            "error": n => { this.error_escaped = n.getObjectValue<SynchronizationError>(createSynchronizationErrorFromDiscriminatorValue); },
            "state": n => { this.state = n.getEnumValue<SynchronizationTaskExecutionResult>(SynchronizationTaskExecutionResult); },
            "timeBegan": n => { this.timeBegan = n.getDateValue(); },
            "timeEnded": n => { this.timeEnded = n.getDateValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("activityIdentifier", this.activityIdentifier);
        writer.writeNumberValue("countEntitled", this.countEntitled);
        writer.writeNumberValue("countEntitledForProvisioning", this.countEntitledForProvisioning);
        writer.writeNumberValue("countEscrowed", this.countEscrowed);
        writer.writeNumberValue("countEscrowedRaw", this.countEscrowedRaw);
        writer.writeNumberValue("countExported", this.countExported);
        writer.writeNumberValue("countExports", this.countExports);
        writer.writeNumberValue("countImported", this.countImported);
        writer.writeNumberValue("countImportedDeltas", this.countImportedDeltas);
        writer.writeNumberValue("countImportedReferenceDeltas", this.countImportedReferenceDeltas);
        writer.writeObjectValue<SynchronizationError>("error", this.error_escaped);
        writer.writeEnumValue<SynchronizationTaskExecutionResult>("state", this.state);
        writer.writeDateValue("timeBegan", this.timeBegan);
        writer.writeDateValue("timeEnded", this.timeEnded);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the state property value. The state property
     * @returns a synchronizationTaskExecutionResult
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The state property
     * @param value Value to set for the state property.
     */
    public set state(value: SynchronizationTaskExecutionResult | undefined) {
        this._state = value;
    };
    /**
     * Gets the timeBegan property value. Time when this job run began. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get timeBegan() {
        return this._timeBegan;
    };
    /**
     * Sets the timeBegan property value. Time when this job run began. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the timeBegan property.
     */
    public set timeBegan(value: Date | undefined) {
        this._timeBegan = value;
    };
    /**
     * Gets the timeEnded property value. Time when this job run ended. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get timeEnded() {
        return this._timeEnded;
    };
    /**
     * Sets the timeEnded property value. Time when this job run ended. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the timeEnded property.
     */
    public set timeEnded(value: Date | undefined) {
        this._timeEnded = value;
    };
}
